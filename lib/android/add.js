'use strict';

/* Ember Capacitor - Android - Add */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const ora       = require( 'ora' );
const fs        = require( 'fs' );
const xml2js    = require( 'xml2js' );
//const lodash    = require('lodash');

const access    = promisify( fs.access    );
const readFile  = promisify( fs.readFile  );
const writeFile = promisify( fs.writeFile );

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
        
        /* Message */
        this.spinner.text = 'Checking AndroidManifest.xml exsits';
        
        /* Check File Exists */
        await access( path );
        
        /* Load File */
        let data = await readFile( path , 'utf-8' );
        
        /* Message */
        this.spinner.text = 'Parsing AndroidManifest.xml';
        
        /* Parse XML */
        const parser = new xml2js.Parser();
        const result = await promisify( parser.parseString.bind( parser ) )( data );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Saving AndroidManifest.xml';
        
        /* Build XML */
        const builder = new xml2js.Builder({ renderOpts: { 'pretty': true , 'indent': '    ' , 'newline': '\n' } });
        let xml = builder.buildObject( result );
        
        /* Save File */
        await promisify( fs.writeFile )( path , xml );
        
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