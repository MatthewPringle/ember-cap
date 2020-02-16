'use strict';

/* Ember Capacitor - Capacitor - Add */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( platform ) {
    try {
        console.log( 'Adding ' + platform.title + ' platform' );
        const child = spawnSync( 'npx' , [ 'cap' , 'add' , platform.platform ] , { encoding : 'utf8' } );
        console.log( child.stdout );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( platform.title + ' platform added' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}