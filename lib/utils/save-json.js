'use strict';

/* Ember Capacitor - Utils - Save JSON */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const writeFile = promisify( require( 'fs' ).writeFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path , json ) {
    try {
        
        /* Convert To String */
        let data = JSON.stringify( json , null , '\t' );
        
        /* Save File */
        await writeFile( path , data );
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}