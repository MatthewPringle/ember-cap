'use strict';

/* Ember Capacitor - Utils - Check File Exists */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( file ) {
    try {
        if ( fs.existsSync( file ) ) {
            return true;
        }
        return false;
    } catch( error ) {
        console.log( error );
        return false;
    }
}