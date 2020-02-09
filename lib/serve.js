/* Ember Capacitor - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );
const ip = require('ip');

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* iOS */
    /* ------------------------------------------------------------------------------------------------ */
    ios: function () {
        
        //build ember
        
        //update capacitor.config.json
        
        //npx cap sync ios
        
        //npx cap open ios
        
        //ember serve
        
        console.log( 'Serving iOS' );
        
        /* Check iOS */
        if ( !this.checkIOS() ) {
            return;
        }
        
        /* Check Capacitor */
        if ( !this.checkCapacitor() ) {
            return;
        }
        
        /* Update Config */
        if ( !this.updateConfig() ) {
            return;
        }
        
    },
    
    /* Android */
    /* ------------------------------------------------------------------------------------------------ */
    android: function() {
        
        console.log( 'Serving Android' );
        
    },
    
    /* Check Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    checkCapacitor: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './package.json' ) );
            if ( ( data.hasOwnProperty( 'devDependencies' ) && !data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) && ( data.hasOwnProperty( 'dependencies' ) && !data.dependencies.hasOwnProperty( '@capacitor/cli' ) ) ) {          
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
            if ( !fs.existsSync( './capacitor.config.json' ) ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check iOS */
    /* ------------------------------------------------------------------------------------------------ */
    checkIOS: function() {
        try {
            if ( fs.existsSync( './ios' ) && fs.lstatSync( './ios' ).isDirectory() ) {
                throw 'iOS already exists';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Android */
    /* ------------------------------------------------------------------------------------------------ */
    checkAndroid: function() {
        try {
            if ( fs.existsSync( './android' ) && fs.lstatSync( './android' ).isDirectory() ) {
                throw 'Android already exists';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Update Config */
    /* ------------------------------------------------------------------------------------------------ */
    updateConfig: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './capacitor.config.json' ) );
            if ( !data.hasOwnProperty( 'server' ) ) {
                data.server = {}
            }
            data.server.url = 'http://' + ip.address() + ':4200';
            fs.writeFileSync( './capacitor.config.json' , JSON.stringify( data , null , '\t' ) );
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
}