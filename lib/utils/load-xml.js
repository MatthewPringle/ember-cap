'use strict';

/* Ember Capacitor - Utils - Load XML */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const xml2js    = require( 'xml2js' );
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
        
        /* Parser */
        const parser = new xml2js.Parser();
        
        /* Parse XML */
        let json = await promisify( parser.parseString.bind( parser ) )( data );
        
        /* Return */
        return json;
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}