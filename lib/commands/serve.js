'use strict';

/* Ember Capacitor - Commands - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const android   = require( '../android/index' );
const capacitor = require( '../capacitor/index' );
const ember     = require( '../ember/index' );

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
            let platform = await capacitor.platform( args[ 4 ] , true );
            
            /* Check Ember Added */
            await ember.added();
            
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
            
            /* Build */
            await ember.build();
            
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