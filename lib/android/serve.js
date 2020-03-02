'use strict';

/* Ember Capacitor - Android - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Path */
/* ---------------------------------------------------------------------------------------------------- */
//const path = './android/app/src/main/AndroidManifest.xml';
const path = './AndroidManifest.xml';

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Loading AndroidManifest.xml' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Parsing AndroidManifest.xml';
        
        /* Load Manifest */
        let manifest = await utils.loadXML( path );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Updating AndroidManifest.xml';
        
        /* Application */        
        var application = manifest.manifest.application.find( element => element[ '$' ] !== undefined );
        
        /* Add Cleartext Traffic */
        if ( application !== undefined && application.hasOwnProperty( '$' ) && !application[ '$' ].hasOwnProperty( 'android:usesCleartextTraffic' ) ) {
            application[ '$' ][ 'android:usesCleartextTraffic' ] = 'true';
        }
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Saving AndroidManifest.xml';
        
        /* Save Manifest */
        await utils.saveXML( path , manifest );
        
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