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
            
            /* Check Command */
            if ( this.commands.includes( args[ 2 ] ) && emberCapacitorCommands.hasOwnProperty( args[ 2 ] ) ) {
                
                /* Run Command */
                emberCapacitorCommands[ args[ 2 ] ].run( args );
                
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