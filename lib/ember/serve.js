'use strict';

/* Ember Capacitor - Ember - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const { spawn } = require( 'child_process' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
            
        const child = spawn( 'ember' , [ 'serve' ] , { encoding : 'utf8' } );
        
        child.stdout.on( 'data' , (data) => {
            console.log( data.toString() );
        });
        
        child.stderr.on( 'data' , (data) => {
            console.error( data.toString() );
        });
        
        child.on( 'close' , (code) => {
            console.log( `child process exited with code ${code}` );
        });
        
    } catch( error ) {
        console.log( error );
        return false;
    }
}