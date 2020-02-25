'use strict';

/* Ember Capacitor - Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
//const utils     = require( '../utils/index'     );
const android   = require( '../android/index'   );
const capacitor = require( '../capacitor/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Platforms */
    /* ------------------------------------------------------------------------------------------------ */    
    platforms: [
        { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
        { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
    ],
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Platform\r\n' );
            
            /* Command */
            let platform = this.platforms.find( item => { return item.platform === args[ 4 ] });
            
            /* Check Command */
            if ( !platform ) {
                throw 'No Platform Selected';
            }
            
            /* Check Capacitor Added */
            //await capacitor.added();
            
            /* Check Capacitor Initiated */
            //await capacitor.initiated();
            
            /* Dist */
            //await capacitor.dist();
            
            /* Add Platform */
            //await capacitor.add( platform );
            
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