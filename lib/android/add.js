'use strict';

/* Ember Capacitor - Android - Add */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const ora       = require( 'ora' );
const fs        = require( 'fs' );
const xml2js    = require( 'xml2js' );

const access    = promisify( fs.access    );
const readFile  = promisify( fs.readFile  );
const writeFile = promisify( fs.writeFile );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Path */
//const path = './android/app/src/main/AndroidManifest.xml';
const path = './AndroidManifest.xml';

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Updating AndroidManifest.xml' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Checking AndroidManifest.xml exsits';
        
        /* Check File Exists */
        await access( path );
        
        /* Load File */
        let data = await readFile( path , 'utf-8' );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Parsing AndroidManifest.xml';
        
        /* Parse XML */
        const parser = new xml2js.Parser();
        const json = await promisify( parser.parseString.bind( parser ) )( data );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Updating AndroidManifest.xml';
        
        /* Add Schema */
        if ( json.manifest[ '$' ][ 'xmlns:android' ] === undefined ) {
           json.manifest[ '$' ][ 'xmlns:android' ] = 'http://schemas.android.com/apk/res/android';
        }
        
        
        
        
        
        var application = json.manifest.application.find( element => element[ '$' ] !== undefined );
        
        //if ( application !== undefined && application.hasOwnProperty( '$' ) && !application[ '$' ].hasOwnProperty( 'android:usesCleartextTraffic' ) ) {
        //    application[ '$' ][ 'android:usesCleartextTraffic' ] = 'true';
        //}
        
        if ( application !== undefined && application.hasOwnProperty( '$' ) && application[ '$' ].hasOwnProperty( 'android:usesCleartextTraffic' ) ) {
            delete application[ '$' ][ 'android:usesCleartextTraffic' ];
        }
        
        
        
        
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Saving AndroidManifest.xml';
        
        /* Build XML */
        const builder = new xml2js.Builder({ renderOpts: { 'pretty': true , 'indent': '    ' , 'newline': '\n' } });
        let xml = builder.buildObject( json );
        
        /* Save File */
        await promisify( fs.writeFile )( path , xml );
        
        /* Sleep */
        await sleep( 1000 );
        
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