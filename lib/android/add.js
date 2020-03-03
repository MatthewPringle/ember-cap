'use strict';

/* Ember Capacitor - Android - Add */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Updating AndroidManifest.xml' ).start();
        
        /* Load Manifest */
        let manifest = await utils.loadXML( './android/app/src/main/AndroidManifest.xml' );
        
        /* Add Schema */
        if ( manifest.hasOwnProperty( 'manifest' ) && manifest.manifest.hasOwnProperty( '$' ) &&  manifest.manifest[ '$' ][ 'xmlns:android' ] === undefined ) {
           manifest.manifest[ '$' ][ 'xmlns:android' ] = 'http://schemas.android.com/apk/res/android';
        }
        
        /* Save Manifest */
        await utils.saveXML( './android/app/src/main/AndroidManifest.xml' , manifest );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Updated AndroidManifest.xml' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot update AndroidManifest.xml' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}