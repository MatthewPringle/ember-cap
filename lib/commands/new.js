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
            if ( args[ 3 ] === undefined || !utils.appName( args[ 3 ] ) ) {
                throw 'Please enter a valid App Name (example-app)';
            }
            
            /* Check App ID */
            if ( args[ 4 ] === undefined || !utils.appID( args[ 4 ] ) ) {
                throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            }
            
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