'use strict';

/* Ember Capacitor - Utils - Change Directory */
/* ---------------------------------------------------------------------------------------------------- */

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( path ) {
    try {
        process.chdir( path + '/' );
        if ( !process.cwd().endsWith( path ) ){
            return false;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}