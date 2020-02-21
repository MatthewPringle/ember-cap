'use strict';

/* Ember Capacitor - Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
//const ember = require( '../ember/index' );
//const utils = require( '../utils/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
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
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
            
            /* Check File Exists */
            //if ( !utils.fileExists( './package.json' ) ) {
            //    throw 'Unable to find package.json.';
            //}
            
            /* Check File Valid */
            //if ( !utils.valid() ) {
            //    throw 'Invalid package.json';
            //}
            
            /* Check Ember Added */
            //if ( !ember.added() ) {
            //    throw 'An Ember app must be created before running ember-cap init';
            //}
            
            /* Check Capacitor Added */
            //if ( capacitor.added() ) {
            //    throw 'Capacitor already installed';
            //}
            
            /* Install Capacitor */
            //if ( !capacitor.install() ) {
            //    throw 'Unable to install Capacitor';
            //}
            
            /* Init Capacitor */
            //if ( !capacitor.init( args[ 3 ] , args[ 4 ] ) ) {
            //    throw 'Unable to initiate Capacitor';
            //}
        
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