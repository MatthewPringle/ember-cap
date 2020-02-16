'use strict';

/* Ember Capacitor - Utils - Folder Exists */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( path ) {
    try {
        if ( fs.existsSync( path ) && fs.lstatSync( path ).isDirectory() ) {
            return true;
        }
        return false;
    } catch( error ) {
        console.log( error );
        return false;
    }
}