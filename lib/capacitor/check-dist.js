'use strict';

/* Ember Capacitor - Capacitor - Check Dist */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        if ( !fs.existsSync( './dist' ) || !fs.lstatSync( './dist' ).isDirectory() ) {
            fs.mkdirSync( './dist' );
        }
        if ( !fs.existsSync( './dist/index.html' ) ) {
            fs.closeSync( fs.openSync( './dist/index.html' , 'a' ) );
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}