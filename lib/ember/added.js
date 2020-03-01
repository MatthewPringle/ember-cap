'use strict';

/* Ember Capacitor - Ember - Check Added */
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
        this.spinner = ora( 'Checking for ember-cli' ).start();
        
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
        this.spinner.text = 'Checking ember-cli added to dependencies';
        
        /* Check Ember Added */
        if ( ( data.hasOwnProperty( 'devDependencies' ) && data.devDependencies.hasOwnProperty( 'ember-cli' ) ) || ( data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( 'ember-cli' ) ) ) {
            
            /* Stop Spinner */
            this.spinner.succeed( 'Found ember-cli' );
        
        /* Error */
        } else {
            throw 'Unable to find ember-cli in package.json';
        }
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'An Ember app must be created before running ember-cap init' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}