'use strict';

/* Ember Capacitor - Ember - Check Installed */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        const child = spawnSync( 'npm' , [ 'list' , '-g' , '--depth' ,  '0' ,  'ember-cli' ] , { encoding : 'utf8' } );
        return child.status === 0;
    } catch( error ) {
        console.log( error );
        return false;
    }
}