'use strict';

/* Ember Capacitor - Android - Add */
/* ---------------------------------------------------------------------------------------------------- */
const ora = require( 'ora' );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Updating AndroidManifest.xml' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'AndroidManifest.xml updated' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot update AndroidManifest.xml' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}