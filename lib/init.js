/* Ember Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );
const fs            = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function() {
            
        /* Check Package Exists */
        if ( !this.checkPackageExists() ) {
            return;
        }
        
        /* Check Package Valid */
        if ( !this.checkPackageValid() ) {
            return;
        }
        
        /* Check Ember */
        if ( !this.checkEmber() ) {
            return;
        }
        
        /* Check Capacitor */
        if ( !this.checkCapacitor() ) {
            return;
        }
        
        /* Install Capacitor */
        if ( !this.installCapacitor() ) {
            return;
        }
        
        /* Init Capacitor */
        if ( !this.initCapacitor() ) {
            return;
        }
        
    },
    
    /* Check Package Exists */
    /* ------------------------------------------------------------------------------------------------ */
    checkPackageExists: function() {
        try {
            if ( !fs.existsSync( './package.json' ) ) {
                throw 'Unable to find package.json.';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Package Valid */
    /* ------------------------------------------------------------------------------------------------ */
    checkPackageValid: function() {
        try {
            let rawdata = fs.readFileSync( './package.json' );
            if ( !rawdata ) {
                throw 'Invalid package.json';
            }
            let data = JSON.parse( rawdata );
            if ( !data || typeof data !== 'object' || ( !data.hasOwnProperty( 'devDependencies' ) && !data.hasOwnProperty( 'dependencies' ) ) ) {
                throw 'Invalid package.json';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Ember */
    /* ------------------------------------------------------------------------------------------------ */
    checkEmber: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './package.json' ) );
            if ( ( data.hasOwnProperty( 'devDependencies' ) && !data.devDependencies.hasOwnProperty( 'ember-cli' ) ) && ( data.hasOwnProperty( 'dependencies' ) && !data.dependencies.hasOwnProperty( 'ember-cli' ) ) ) {
                throw 'Ember must be installed before running ember-cap init';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    checkCapacitor: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './package.json' ) );
            if ( ( data.hasOwnProperty( 'devDependencies' ) && !data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) && ( data.hasOwnProperty( 'dependencies' ) && !data.dependencies.hasOwnProperty( '@capacitor/cli' ) ) ) {          
                throw 'Capacitor is already installed';
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Install Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    installCapacitor: function() {
        try {
            console.log( 'Installing Capacitor' );
            const child = spawnSync( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] , { encoding : 'utf8' } );
            console.log( child.stdout );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
            console.log( 'Capacitor Installed' );
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Init Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    initCapacitor: function() {
        try {
            console.log( 'Initiating Capacitor' );
            const child = spawnSync( 'npx' , [ 'cap' , 'init' , '--web-dir' , 'dist' , 'ember-capacitor-app' , 'com.example.app' ] , { encoding : 'utf8' } );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
            console.log( 'Capacitor Initiated' );
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
}