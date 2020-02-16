'use strict';

/* Ember Capacitor - Utils - Check Folder Exists */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

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