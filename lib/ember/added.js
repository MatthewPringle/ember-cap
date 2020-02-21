'use strict';

/* Ember Capacitor - Ember - Check Added */
/* ---------------------------------------------------------------------------------------------------- */
//const promisify = require( 'util' ).promisify;
//const exec      = promisify( require( 'child_process' ).exec );
//const ora       = require( 'ora' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Checking ember-cli' ).start();
        
        
        //'Unable to find package.json.'
        
        //'Invalid package.json'

    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'An Ember app must be created before running ember-cap init' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}