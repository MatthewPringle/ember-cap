/* Ember Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const { spawn     } = require( 'child_process' );
const { spawnSync } = require( 'child_process' );
const fs            = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function() {
        
        /* Check Package.json Exists */
        if ( this.checkPackageExists() ) {
            
            /* Check Ember */
            if ( this.checkEmber() ) {
                
                /* Install Capacitor */
                this.installCapacitor();
                
            /* Error */
            } else {
                console.log( 'Invalid package.json' );
                console.log( 'Ember must be installed before running ember-cap init' );
            }
            
        /* Error */
        } else {
            console.log( 'Unable to find package.json.' );
            console.log( 'Ember must be installed before running ember-cap init' );
        }
        
    },
    
    /* Check Package Exists */
    /* ------------------------------------------------------------------------------------------------ */
    checkPackageExists: function() {
        try {
            return fs.existsSync( './package.json' );
        } catch( error ) {
            return false;
        }
    },
    
    /* Check Ember */
    /* ------------------------------------------------------------------------------------------------ */
    checkEmber: function() {
        try {
            let rawdata = fs.readFileSync( './package.json' );
            let data = JSON.parse( rawdata );
            return data && typeof data === 'object' && data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( 'ember-cli' ) && !data.dependencies.hasOwnProperty( '@capacitor/core' );
        } catch( error ) {
            return false;
        }
    },
    
    /* Check Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    checkCapacitor: function() {
        try {
            let rawdata = fs.readFileSync( './package.json' );
            let data = JSON.parse( rawdata );
            return data && typeof data === 'object' && data.hasOwnProperty( 'dependencies' ) && data.dependencies.hasOwnProperty( '@capacitor/cli' ) && data.dependencies.hasOwnProperty( '@capacitor/core' );
        } catch( error ) {
            return false;
        }
    },
    
    /* Install Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    installCapacitor: function() {
        
        /* Message */
        console.log( 'Installing Capacitor' );
        
        /* Spawn Child Process */
        const child = spawnSync( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] , { encoding : 'utf8' } );
        
        /* Output */
        console.log( child.stdout );
        
        /* Message */
        if ( child.status === 0 ) {
            console.log( 'Capacitor Installed' );
            return true;
            
        /* Error */
        } else {
            console.log( child.stderr );
            return false;
        }
        
    },
    
    /* Init Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    initCapacitor: function() {
        
        //echo "Initiating Capacitor"
        //npx cap init ember-capacitor-app com.example.app --web-dir dist
        
    }
    
}