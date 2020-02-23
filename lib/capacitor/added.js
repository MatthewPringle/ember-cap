'use strict';

/* Ember Capacitor - Capacitor - Added */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const ora       = require( 'ora' );
const fs        = require( 'fs' );
const readFile  = promisify( fs.readFile );
const access    = promisify( fs.access );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
    
        /* Start Spinner */
        this.spinner = ora( 'Checking for @capacitor/cli' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Checking package.json exsits';
        
        /* Check File Exists */
        await access( './package.json' );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Checking package.json valid';
        
        /* Check File Contents */
        let rawdata = await readFile( './package.json' , 'utf-8' );
        if ( !rawdata ) {
            throw 'Invalid package.json';
        }
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Checking package.json dependencies';
        
        /* Check File Valid */
        let data = JSON.parse( rawdata );
        if ( !data || typeof data !== 'object' || ( !data.hasOwnProperty( 'devDependencies' ) && !data.hasOwnProperty( 'dependencies' ) ) ) {
            throw 'Invalid package.json';
        }
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Checking @capacitor/cli added to dependencies';
        
        /* Check Capacitor Added */
        if ( ( data.hasOwnProperty( 'devDependencies' ) && data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) || ( data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( '@capacitor/cli' ) ) ) {
            throw 'Capacitor already installed';
        }
        
        /* Stop Spinner */
        this.spinner.succeed( 'Capacitor not installed' );
    
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Unable to install Capacitor' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}