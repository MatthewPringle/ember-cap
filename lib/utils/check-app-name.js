'use strict';

/* Ember Capacitor - Utils - Check App Name */
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