'use strict';

/* Ember Capacitor - Capacitor - Add */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Adding ' + platform.title + ' platform' ).start();
        
        /* Add Platform */
        await exec( 'npx cap add ' + platform.platform , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Added ' + platform.title + ' platform' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not add ' + platform.title + ' platform' );
        
        /* Throw Error */
        throw error;
        
    }
}