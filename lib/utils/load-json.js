'use strict';

/* Ember Capacitor - Utils - Load JSON */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const access    = promisify( require( 'fs' ).access );
const readFile  = promisify( require( 'fs' ).readFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( path ) {
    try {
        
        /* Check File Exists */
        await access( path );
        
        /* Load File */
        let data = await readFile( path , 'utf-8' );
        
        /* Parse JSON */
        let json = JSON.parse( data );
        
        /* Return */
        return json;
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}