'use strict';

/* Ember Capacitor - Capacitor - Install */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

module.exports = function() {
    try {
        console.log( 'Installing Capacitor' );
        const child = spawnSync( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] , { encoding : 'utf8' } );
        console.log( child.stdout );
        if ( child.status !== 0 ) {
            throw child.stderr;
        }
        console.log( 'Capacitor installed' );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}