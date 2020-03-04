'use strict';

/* Ember Capacitor - Capacitor - Sync Platform */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Syncing ' + platform.title + ' platform' ).start();
        
        /* Sync Platform */
        await exec( 'npx cap sync ' + platform.platform , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Synced ' + platform.title + ' platform' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not sync ' + platform.title + ' platform' );
        
        /* Throw Error */
        throw error;
        
    }
}