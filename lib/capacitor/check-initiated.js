'use strict';

/* Ember Capacitor - Capacitor - Check Initiated */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        if ( !fs.existsSync( './capacitor.config.json' ) ) {
            return false;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}