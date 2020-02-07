/* Ember Capacitor - New */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );
const fs            = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    // npm install -g ember-cli
    // ember new my-new-app
    // ember new <app-name>
    // cd my-new-app
    // ember server
    
    // bundle identifier
    // app id (the package name for Android and the bundle identifier for iOS
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( name , id ) {
        
        /* Check Ember Installed */
        if ( !this.checkEmberInstalled() ) {
            return;
        }
        
        /* Check App Name */
        if ( !this.checkAppName( name ) ) {
            return;
        }
        
        /* Check App ID */
        if ( !this.checkAppID( id ) ) {
            return;
        }
        
    },
    
    /* Check Ember Installed */
    /* ------------------------------------------------------------------------------------------------ */
    checkEmberInstalled: function() {
        try {
            const child = spawnSync( 'npm' , [ 'list' , '-g' , '--depth' ,  '0' ,  'ember-cli' ] , { encoding : 'utf8' } );
            if ( child.status !== 0 ) {
                throw 'Ember not installed\nTo install Ember use npm install -g ember-cli';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check App Name */
    /* ------------------------------------------------------------------------------------------------ */
    checkAppName: function( name ) {
        try {
            if ( name === undefined || /\s/g.test( name ) ) {
                throw 'Please enter a valid App Name (example-app)';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check App ID */
    /* ------------------------------------------------------------------------------------------------ */
    checkAppID: function( id ) {
        try {
            if ( id === undefined || /\s/g.test( id ) || !/^[a-z]+(\.[a-z][a-z0-9]*)*$/g.test( id ) ) {
                throw 'Please enter an App Package ID (in Java package format, no dashes) (com.example.app)';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
}