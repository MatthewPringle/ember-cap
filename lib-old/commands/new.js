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
    run: function( args ) {
        try {
            
            /* Message */
            //process.stdout.write( ' - New\r\n' );
            
            /* Check App Name */
            //if ( args[ 3 ] === undefined || !utils.appName( args[ 3 ] ) ) {
            //    throw 'Please enter a valid App Name (example-app)';
            //}
            
            /* Check App ID */
            //if ( args[ 4 ] === undefined || !utils.appID( args[ 4 ] ) ) {
            //    throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            //}
            
            /* Check Ember Installed */
            //if ( !ember.installed() ) {
            //    throw 'Ember not installed\nTo install Ember use npm install -g ember-cli';
            //}
            
            /* New Ember App */
            //if ( !ember.newApp( args[ 3 ] ) ) {
            //    throw 'Could not create new Ember app';
            //}
            
            /* App Directory */
            //if ( !utils.directory( args[ 3 ] ) ) {
            //    throw 'Could not change directory to new Ember app';
            //}
            
            /* Init Capacitor */
            process.stdout.write( '\r\nEmber Capacitor' );
            init.run( args );
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}