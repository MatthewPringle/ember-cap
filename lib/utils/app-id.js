'use strict';

/* Ember Capacitor - Utils - App ID */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( id ) {
    try {
        
        /* Check App ID */
        if ( id === undefined || /\s/g.test( id ) || !/^[a-z]+(\.[a-z][a-z0-9]*)*$/g.test( id ) ) {
            throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
        }
        
    } catch( error ) {
        
        /* Log Error */
        console.log( error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}