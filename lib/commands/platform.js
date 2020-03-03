'use strict';

/* Ember Capacitor - Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
//const utils     = require( '../utils/index'     );
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
            process.stdout.write( ' - Platform\r\n' );
            
            /* Platform */
            let platform = capacitor.platforms( args[ 4 ] );
            
            
            
            
            
            
            /* Check Platform Exists */
            //if ( utils.folderExists( platform.path ) ) {
            //    throw platform.title + ' already exists';
            //}
            
            
            /* Check Capacitor Added */
            await capacitor.added();
            
            /* Check Capacitor Initiated */
            await capacitor.initiated();
            
            /* Dist */
            await capacitor.dist();
            
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