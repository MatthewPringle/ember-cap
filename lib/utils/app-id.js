'use strict';

/* Ember Capacitor - Utils - App ID */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( id ) {
    try {
        if ( id === undefined || /\s/g.test( id ) || !/^[a-z]+(\.[a-z][a-z0-9]*)*$/g.test( id ) ) {
            return false;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}