'use strict';

/* Ember Capacitor - Android - Serve */
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
        
        /* Application */
        var application = manifest.manifest.application.find( element => element[ '$' ] !== undefined );
        
        /* Add Cleartext Traffic */
        if ( application !== undefined && application.hasOwnProperty( '$' ) && !application[ '$' ].hasOwnProperty( 'android:usesCleartextTraffic' ) ) {
            application[ '$' ][ 'android:usesCleartextTraffic' ] = 'true';
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