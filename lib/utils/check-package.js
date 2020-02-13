'use strict';

/* Ember Capacitor - Utils - Check Package */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

module.exports = function() {
    try {
        let rawdata = fs.readFileSync( './package.json' );
        if ( !rawdata ) {
            return false;
        }
        let data = JSON.parse( rawdata );
        if ( !data || typeof data !== 'object' || ( !data.hasOwnProperty( 'devDependencies' ) && !data.hasOwnProperty( 'dependencies' ) ) ) {
            return false;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}