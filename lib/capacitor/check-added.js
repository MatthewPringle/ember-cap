'use strict';

/* Ember Capacitor - Capacitor - Check Added */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

module.exports = function() {
    try {
        let data = JSON.parse( fs.readFileSync( './package.json' ) );
        return ( data.hasOwnProperty( 'devDependencies' ) && data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) || ( data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( '@capacitor/cli' ) );           
    } catch( error ) {
        console.log( error );
        return false;
    }
}