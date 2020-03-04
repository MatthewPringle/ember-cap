'use strict';

/* Ember Capacitor - Capacitor - Added */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const readFile  = promisify( require( 'fs' ).readFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
    
        /* Start Spinner */
        this.spinner = ora( 'Checking for @capacitor/cli' ).start();
        
        /* Load File */
        let rawdata = await readFile( './package.json' , 'utf-8' );
        
        /* Check File Contents */
        if ( !rawdata || typeof rawdata !== 'string' ) {
            throw 'Invalid package.json';
        }
        
        /* Parse JSON */
        let data = JSON.parse( rawdata );
        
        /* Check Valid */
        if ( !data || typeof data !== 'object' || ( !data.hasOwnProperty( 'devDependencies' ) && !data.hasOwnProperty( 'dependencies' ) ) ) {
            throw 'Invalid package.json';
        }
        
        /* Check Capacitor Added */
        if ( ( data.hasOwnProperty( 'devDependencies' ) && data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) || ( data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( '@capacitor/cli' ) ) ) {
            
            /* Stop Spinner */
            this.spinner.succeed( 'Found @capacitor/cli' );
            
        /* Error */
        } else {
            throw 'Unable to find @capacitor/cli in package.json';
        }
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not find @capacitor/cli' );
        
        /* Throw Error */
        throw error;
        
    }
}