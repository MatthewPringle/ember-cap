'use strict';

/* Ember Capacitor - Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
const ember     = require( '../ember/index' );
const capacitor = require( '../capacitor/index' );
//const utils = require( '../utils/index' );

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
            if ( args[ 3 ] === undefined || !utils.appName( args[ 3 ] ) ) {
                throw 'Please enter a valid App Name (example-app)';
            }
            
            /* Check App ID */
            if ( args[ 4 ] === undefined || !utils.appID( args[ 4 ] ) ) {
                throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            }
            
            /* Check Ember Added */
            await ember.added();            
            
            /* Check Capacitor Added */
            await capacitor.added();
            
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