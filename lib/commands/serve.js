'use strict';

/* Ember Capacitor - Commands - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const android   = require( '../android/index'   );
const capacitor = require( '../capacitor/index' );
const ember     = require( '../ember/index'     );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Serve\r\n' );
            
            /* Platform */
            let platform = capacitor.platforms( args[ 4 ] );
            
            
            /* Check Platform Exists */
            //if ( !utils.folderExists( platform.path ) ) {
            //    throw platform.title + ' doesnt exists';
            //}
            
            /* Check File Exists */
            //if ( !utils.fileExists( './package.json' ) ) {
            //    throw 'Unable to find package.json.';
            //}
            
            
            /* Check Capacitor Added */
            await capacitor.added();
            
            /* Check Capacitor Initiated */
            await capacitor.initiated();
            
            /* Capacitor Serve */
            await capacitor.serve();
            
            /* Android Serve */
            if ( platform.platform === 'android' ) {
                await android.serve();
            }
            
            /* Sync Platform */
            await capacitor.sync( platform );
            
            /* Open Platform */
            await capacitor.open( platform );
            
            /* Serve */
            ember.serve();
            
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