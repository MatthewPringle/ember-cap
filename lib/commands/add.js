'use strict';

/* Ember Capacitor - Commands - Add */
/* ---------------------------------------------------------------------------------------------------- */
const android   = require( '../android/index'   );
const capacitor = require( '../capacitor/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Add\r\n' );
            
            /* Platform */
            let platform = await capacitor.platform( args[ 3 ] , false );
            
            /* Dist */
            await capacitor.dist();
            
            /* Check Capacitor Added */
            await capacitor.added();
            
            /* Check Capacitor Initiated */
            await capacitor.initiated();
            
            /* Add Platform */
            await capacitor.add( platform );
            
            /* Android */
            if ( platform.platform === 'android' ) {
                await android.add();
            }
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            
            /* Log Error */
            console.log( '\r\n' + error );
            
            /* Exit */
            process.exit( 1 );
            
        }
        
    }
    
}