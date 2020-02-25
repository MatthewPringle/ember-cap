'use strict';

/* Ember Capacitor - Utils - Save XML */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const xml2js    = require( 'xml2js' );
const writeFile = promisify( fs.writeFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path , name , json ) {
    try {
        
        /* New Builder */
        const builder = new xml2js.Builder({ renderOpts: { 'pretty': true , 'indent': '    ' , 'newline': '\n' } });
        
        /* Build XML */
        let xml = builder.buildObject( json );
        
        /* Save File */
        await promisify( fs.writeFile )( path , xml );
        
    } catch( error ) {
        console.log( error );
        return false;
    }
}