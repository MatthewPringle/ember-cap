'use strict';

/* Ember Capacitor - Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
const ember     = require( '../ember/index.js'     );
const capacitor = require( '../capacitor/index.js' );
const utils     = require( '../utils/index.js'     );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Init\r\n' );
            
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
            
            /* Check File Exists */
            if ( !utils.checkFileExists( './package.json' ) ) {
                throw 'Unable to find package.json.';
            }
            
            /* Check File Valid */
            if ( !utils.checkPackage() ) {
                throw 'Invalid package.json';
            }
            
            /* Check Ember Added */
            if ( !ember.checkAdded() ) {
                throw 'An Ember app must be created before running ember-cap init';
            }
            
            /* Check Capacitor Added */
            if ( capacitor.checkAdded() ) {
                throw 'Capacitor already installed';
            }
            
            /* Install Capacitor */
            if ( !capacitor.install() ) {
                throw 'Unable to install Capacitor';
            }
            
            /* Init Capacitor */
            if ( !capacitor.init( name , id ) ) {
                throw 'Unable to initiate Capacitor';
            }
            
            
            
            
            
            /* Check File Exists */
            //if ( !utils.checkFileExists( './package.json' ) ) {
            //    throw 'Unable to find package.json.';
            //}
            
            /* Check File Valid */
            //if ( !utils.checkPackageJSON() ) {
            //    throw 'Invalid package.json';
            //}
            
            /* Check Ember Added */
            //if ( !utils.checkEmberAdded() ) {
            //    throw 'An Ember app must be created before running ember-cap init';
            //}
            
            /* Check Capacitor Added */
            //if ( utils.checkCapacitorAdded() ) {
            //    throw 'Capacitor already installed';
            //}
            
            /* Install Capacitor */
            //if ( !utils.installCapacitor() ) {
            //    throw 'Unable to install Capacitor';
            //}
            
            /* Init Capacitor */
            //if ( !utils.initCapacitor( name , id ) ) {
            //    throw 'Unable to initiate Capacitor';
            //}
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}