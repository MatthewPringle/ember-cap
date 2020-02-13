'use strict';

/* Ember Capacitor - Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

module.exports = function( name , id ) {
    try {
        console.log( 'Initiating Capacitor' );
        const child = spawnSync( 'npx' , [ 'cap' , 'init' , '--web-dir' , 'dist' , name , id ] , { encoding : 'utf8' } );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( 'Capacitor initiated' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}