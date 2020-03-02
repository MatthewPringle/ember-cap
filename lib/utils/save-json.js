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
        
        /* Save File */
        await promisify( fs.writeFile )( path , JSON.stringify( json , null , '\t' ) );
        
    } catch( error ) {
        throw error;
    }
}