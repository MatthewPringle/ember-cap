'use strict';

/* Ember Capacitor - Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( name , id ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Initiating Capacitor' ).start();
        
        /* Init Capacitor */
        await exec( 'npx cap init --web-dir dist ' + name + ' ' + id , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Initiated Capacitor' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not initiate Capacitor' );
        
        /* Throw Error */
        throw error;
        
    }
}