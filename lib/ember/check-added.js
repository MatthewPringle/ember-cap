'use strict';

/* Ember Capacitor - Ember - Check Added */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

module.exports = function() {
    try {
        let data = JSON.parse( fs.readFileSync( './package.json' ) );
        return ( data.hasOwnProperty( 'devDependencies' ) && data.devDependencies.hasOwnProperty( 'ember-cli' ) ) || ( data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( 'ember-cli' ) );
    } catch( error ) {
        console.log( error );
        return false;
    }
}