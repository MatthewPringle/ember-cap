'use strict';

/* Ember Capacitor - Capacitor - Sync Platform */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function( platform ) {
    try {
        console.log( 'Syncing ' + platform.title + ' platform' );
        const child = spawnSync( 'npx' , [ 'cap' , 'sync' , platform.platform ] , { encoding : 'utf8' } );
        console.log( child.stdout );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( platform.title + ' platform synced' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}