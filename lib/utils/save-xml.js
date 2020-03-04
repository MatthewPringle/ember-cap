'use strict';

/* Ember Capacitor - Utils - Save XML */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const xml2js    = require( 'xml2js' );
const writeFile = promisify( require( 'fs' ).writeFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path , json ) {
    try {
        
        /* New Builder */
        const builder = new xml2js.Builder({ renderOpts: { 'pretty': true , 'indent': '    ' , 'newline': '\n' } });
        
        /* Build XML */
        let xml = builder.buildObject( json );
        
        /* Save File */
        await writeFile( path , xml );
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}