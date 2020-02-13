'use strict';

/* Ember Capacitor - Commands - New */
/* ---------------------------------------------------------------------------------------------------- */
const ember = require( '../ember/index.js' );
const utils = require( '../utils/index.js' );

module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - New\r\n' );
            
            console.log( args );
            
            var name = 'example-app';
            var id   = 'com.test.matt';
            
            /* Check App Name */
            //if ( process.argv[ 3 ] === undefined ) {
            //    throw 'Error: No App Name';
            //}
            
            /* Check App Package ID */ //Check Capacitor error
            //if ( process.argv[ 4 ] === undefined ) {
            //    throw 'Error: No App Package ID';
            //}
            
            /* Check Ember Installed */
            if ( !ember.checkInstalled() ) {
                throw 'Ember not installed\nTo install Ember use npm install -g ember-cli';
            }
            
            /* Check App Name */
            if ( !utils.checkAppName( name ) ) {
                throw 'Please enter a valid App Name (example-app)';
            }
            
            /* Check App ID */
            if ( !utils.checkAppID( id ) ) {
                throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            }
            
            /* New Ember App */
            if ( !ember.newApp( name ) ) {
                throw 'Could not create new Ember app';
            }
            
            
            /* Check Ember Installed */
            //if ( !utils.checkEmberInstalled() ) {
            //    throw 'Ember not installed\nTo install Ember use npm install -g ember-cli';
            //}
            
            /* Check App Name */
            //if ( !utils.checkAppName( name ) ) {
            //    throw 'Please enter a valid App Name (example-app)';
            //}
            
            /* Check App ID */
            //if ( !utils.checkAppID( id ) ) {
            //    throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            //}
            
            /* New Ember App */
            //if ( !utils.newEmberApp( name ) ) {
            //    throw 'Could not create new Ember app';
            //}
            
            /* App Directory */
            //if ( !utils.appDirectory( name ) ) {
            //    throw 'Could not change directory to new Ember app';
            //}
            
            /* Init Capacitor */
            //init.run( name , id );
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}