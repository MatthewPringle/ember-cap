'use strict';

/* Ember Capacitor - Utils - App ID */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( id ) {
    try {
        
        /* Check App ID */
        if ( id === undefined || /\s/g.test( id ) || !/^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/.test( id ) ) {
            
            /* Throw Error */
            throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            
        }
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}