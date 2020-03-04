'use strict';

/* Ember Capacitor - Ember - Check Added */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const readFile  = promisify( require( 'fs' ).readFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Checking for ember-cli' ).start();
        
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
        this.spinner.fail( 'Could not find ember-cli' );
        
        /* Throw Error */
        throw error;
        
    }
}