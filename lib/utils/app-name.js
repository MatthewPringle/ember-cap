'use strict';

/* Ember Capacitor - Utils - App Name */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( name ) {
    try {
        
        /* Check Name */
        if ( name === undefined || /\s/g.test( name ) ) {
            
            /* Throw Error */
            throw 'Please enter a valid App Name (example-app)';
            
        }
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}