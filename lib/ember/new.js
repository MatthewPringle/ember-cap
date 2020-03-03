'use strict';

/* Ember Capacitor - Ember - New */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );
const ora       = require( 'ora' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( name ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Creating new Ember app' ).start();
        
        /* Search For Ember */
        await exec( 'ember new ' + name , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Ember app created' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not create new Ember app' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}