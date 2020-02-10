/* Ember Capacitor - New */
/* ---------------------------------------------------------------------------------------------------- */
const utils = require( '../lib/utils' );
const init  = require( '../lib/init'  );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( name , id ) {
        try {
            
            /* Check Ember Installed */
            if ( !utils.checkEmberInstalled() ) {
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
            if ( !utils.newEmberApp( name ) ) {
                throw 'Could not create new Ember app';
            }
            
            /* App Directory */
            if ( !utils.appDirectory( name ) ) {
                throw 'Could not change directory to new Ember app';
            }
            
            /* Init Capacitor */
            init.run();
            
            /* Return */
            return true;
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    }
    
}