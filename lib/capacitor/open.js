'use strict';

/* Ember Capacitor - Capacitor - Open */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Opening ' + platform.title + ' platform' ).start();
        
        /* Open Platform */
        await exec( 'npx cap open ' + platform.platform , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Opened ' + platform.title + ' platform' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not open ' + platform.title + ' platform' );
        
        /* Throw Error */
        throw error;
        
    }
}