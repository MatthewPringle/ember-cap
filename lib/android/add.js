'use strict';

/* Ember Capacitor - Android - Add */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Path */
        //const path = './android/app/src/main/AndroidManifest.xml';
        const path = './AndroidManifest.xml';
        
        /* Start Spinner */
        this.spinner = ora( 'Updating AndroidManifest.xml' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Load Manifest */
        let manifest = await utils.loadXML( path , 'AndroidManifest.xml' );
        
        /* Add Schema */
        if ( manifest.manifest[ '$' ][ 'xmlns:android' ] === undefined ) {
           manifest.manifest[ '$' ][ 'xmlns:android' ] = 'http://schemas.android.com/apk/res/android';
        }
        
        /* Save Manifest */
        await utils.saveXML( path , 'AndroidManifest.xml' , manifest );
        
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