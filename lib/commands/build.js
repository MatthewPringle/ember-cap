'use strict';

/* Ember Capacitor - Commands - Build */
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
            process.stdout.write( ' - Build\r\n' );
            
            /* Platform */
            let platform = this.platforms.find( item => { return item.platform === args[ 4 ] });
            
            /* Check Command */
            if ( !platform ) {
                throw 'No Platform Selected';
            }
            
            /* Check Capacitor Added */
            await capacitor.added();
            
            /* Check Capacitor Initiated */
            await capacitor.initiated();
            
            /* Capacitor Build */
            await capacitor.build();
            
            /* Android Build */
            if ( platform.platform === 'android' ) {
                await android.build();
            }
            
            /* Build */
            //ember.build();
            
            /* Sync Platform */
            await capacitor.sync( platform );
            
            /* Open Platform */
            await capacitor.open( platform );
            
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