'use strict';

/* Ember Capacitor - Ember - New App */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( name ) {
    try {
        console.log( 'Creating new Ember app' );
        const child = spawnSync( 'ember' , [ 'new' , name ] , { encoding : 'utf8' } );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( 'Ember app created' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}