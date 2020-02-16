'use strict';

/* Ember Capacitor - Capacitor - Open */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( platform ) {
    try {
        const child = spawnSync( 'npx' , [ 'cap' , 'open' , platform.platform ] , { encoding : 'utf8' } );
        console.log( child.stdout );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}