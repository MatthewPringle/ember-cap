'use strict';

/* Ember Capacitor - Utils - Save JSON */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const writeFile = promisify( fs.writeFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path , json ) {
    try {
        
        /* Convert To String */
        let data = JSON.stringify( json , null , '\t' );
        
        /* Save File */
        await promisify( fs.writeFile )( path , data );
        
    } catch( error ) {
        throw error;
    }
}