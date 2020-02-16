'use strict';

/* Ember Capacitor - Utils - App Name */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( name ) {
    try {
        if ( name === undefined || /\s/g.test( name ) ) {
            return false;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}