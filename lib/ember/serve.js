'use strict';

/* Ember Capacitor - Ember - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const { spawn } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        
        /* Ember Serve */
        const ember = spawn( 'ember' , [ 'serve' ] , { encoding : 'utf8' } );
        
        /* Output */
        ember.stdout.on( 'data' , (data) => {
            console.log( data.toString() );
        });
        
        /* Error */
        ember.stderr.on( 'data' , (data) => {
            console.error( data.toString() );
        });
        
        /* Close */
        ember.on( 'close' , (code) => {
            console.log( 'Child process exited with code ' + code );
        });
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}