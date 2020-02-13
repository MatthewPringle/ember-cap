'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapacitorCommands = require( '../lib/commands/index.js' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            console.clear();
            process.stdout.write( '\r\nEmber Capacitor' );
            
            /* Command */
            let command = args[ 2 ];
            
            /* Check Command */
            if ( emberCapacitorCommands.hasOwnProperty( command ) ) {
                
                /* Run Command */
                emberCapacitorCommands[ command ].run( args );
                
            } else {
                throw 'Error: Command not found';
            }
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            process.stdout.write( '\r\n' );
            console.log( error );
        }
        
    }
    
}