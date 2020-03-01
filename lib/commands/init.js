'use strict';

/* Ember Capacitor - Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
const ember     = require( '../ember/index'     );
const capacitor = require( '../capacitor/index' );
const utils     = require( '../utils/index'     );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Init\r\n' );
            
            /* Check App Name */
            utils.appName( args[ 3 ] );
            
            /* Check App ID */
            utils.appID( args[ 4 ] );
            
            /* Check Ember Added */
            await ember.added();
            
            /* Install Capacitor */
            await capacitor.install();
            
            /* Init Capacitor */
            await capacitor.init( args[ 3 ] , args[ 4 ] );
            
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