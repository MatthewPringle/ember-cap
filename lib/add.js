/* Ember Capacitor - Add */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );
const fs            = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* iOS */
    /* ------------------------------------------------------------------------------------------------ */
    ios: function () {
        
        console.log( 'Adding iOS' );
        
        /* Check iOS */
        if ( !this.checkIOS() ) {
            return;
        }
        
        /* Check Capacitor */
        if ( !this.checkCapacitor() ) {
            return;
        }
        
        /* Check Dist */
        if ( !this.checkDist() ) {
            return;
        }
        
        /* Add iOS */
        if ( !this.addIOS() ) {
            return;
        }
        
    },
    
    /* Android */
    /* ------------------------------------------------------------------------------------------------ */
    android: function() {
        
        console.log( 'Adding Android' );
        
        /* Check Android */
        if ( !this.checkAndroid() ) {
            return;
        }
        
        /* Check Capacitor */
        if ( !this.checkCapacitor() ) {
            return;
        }
        
        /* Check Dist */
        if ( !this.checkDist() ) {
            return;
        }
        
        /* Add Android */
        if ( !this.addAndroid() ) {
            return;
        }
        
        /* Android Manifest */
        if ( !this.updateAndroidManifest() ) {
            return;
        }
        
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
    
    /* Check Dist */
    /* ------------------------------------------------------------------------------------------------ */
    checkDist: function() {
        try {
            if ( !fs.existsSync( './dist' ) || !fs.lstatSync( './dist' ).isDirectory() ) {
                fs.mkdirSync( './dist' );
            }
            if ( !fs.existsSync( './dist/index.html' ) ) {
                fs.closeSync( fs.openSync( './dist/index.html' , 'a' ) );
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
    
    /* Add iOS */
    /* ------------------------------------------------------------------------------------------------ */
    addIOS: function() {
        try {
            const child = spawnSync( 'npx' , [ 'cap' , 'add' , 'ios' ] , { encoding : 'utf8' } );
            console.log( child.stdout );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
            console.log( 'iOS added' );
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
    
    /* Add iOS */
    /* ------------------------------------------------------------------------------------------------ */
    addAndroid: function() {
        try {
            const child = spawnSync( 'npx' , [ 'cap' , 'add' , 'android' ] , { encoding : 'utf8' } );
            console.log( child.stdout );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
            console.log( 'Android added' );
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Update Android Manifest */
    /* ------------------------------------------------------------------------------------------------ */
    updateAndroidManifest: function() {
        try {
            if ( !fs.existsSync( './android/app/src/main/AndroidManifest.xml' ) ) {
                throw 'Unable to find AndroidManifest.xml';
            }
            fs.readFile( './android/app/src/main/AndroidManifest.xml' , 'utf-8' , function( error , data ) {
                if ( error ) { throw 'Unable to read AndroidManifest.xml'; }
                data = data.replace( '<application\n' , '<application\n\tandroid:usesCleartextTraffic="true"\n' );                
                fs.writeFile( './android/app/src/main/AndroidManifest.xml' , data , function( error , data ) {
                    if ( error ) { throw 'Unable to write AndroidManifest.xml'; }
                    console.log( 'Updated AndroidManifest.xml' );
                });
            });
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
}