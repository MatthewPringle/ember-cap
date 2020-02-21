'use strict';

/* Ember Capacitor - Ember - Build */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        console.log( 'Building Ember' );
        const child = spawnSync( 'ember' , [ 'build' , '--environment=production' ] , { encoding : 'utf8' } );
        console.log( child.stdout );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( 'Ember Built' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}