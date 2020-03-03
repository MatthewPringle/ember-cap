'use strict';

/* Ember Capacitor - Ember - Check Installed */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );
const ora       = require( 'ora' );

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
        this.spinner = ora( 'Checking ember-cli' ).start();
        
        /* Sleep */
        await sleep( 2000 );
        
        /* Search For Ember */
        await exec( 'npm list -g --depth 0 ember-cli' , { encoding : 'utf8' , shell: true } );
        
        /* Sleep */
        await sleep( 2000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Found ember-cli' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Ember not installed\nTo install ember-cli use npm install -g ember-cli' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}