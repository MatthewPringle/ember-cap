'use strict';

/* Ember Capacitor - Ember - New */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( name ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Creating new Ember app' ).start();
        
        /* Search For Ember */
        await exec( 'ember new ' + name , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Created new Ember app' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not create new Ember app' );
        
        /* Throw Error */
        throw error;
        
    }
}