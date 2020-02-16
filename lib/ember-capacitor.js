'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapacitorCommands = require( '../lib/commands/index.js' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Commands */
    /* ------------------------------------------------------------------------------------------------ */
    commands: [ 'new' , 'init' , 'platform' , 'serve' , 'build' ],
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            console.clear();
            process.stdout.write( '\r\nEmber Capacitor' );
            
            /* Command */
            let command = args[ 2 ]; // check args[2] exists
            
            /* Check Command */
            if ( this.commands.includes( command ) && emberCapacitorCommands.hasOwnProperty( command ) ) {
                
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