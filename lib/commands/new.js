'use strict';

/* Ember Capacitor - Commands - New */
/* ---------------------------------------------------------------------------------------------------- */
const ember = require( '../ember/index' );
const utils = require( '../utils/index' );
const init  = require( './init'         );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - New\r\n' );
            
            /* Check App Name */
            utils.appName( args[ 3 ] );
            
            /* Check App ID */
            utils.appID( args[ 4 ] );
            
            /* Check Ember Installed */
            await ember.installed();
            
            /* New Ember App */
            await ember.new( args[ 3 ] );
            
            /* App Directory */
            process.chdir( args[ 3 ] + '/' );
            
            /* Message */
            process.stdout.write( '\r\nEmber Capacitor' );
            
            /* Init Capacitor */
            init.run( args );
            
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