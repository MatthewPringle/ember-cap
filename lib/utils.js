/* Ember Capacitor - Utils */
/* ---------------------------------------------------------------------------------------------------- */
const { spawnSync } = require( 'child_process' );
const fs            = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {

    /* Check Ember Installed */
    /* ------------------------------------------------------------------------------------------------ */
    checkEmberInstalled: function() {
        try {
            const child = spawnSync( 'npm' , [ 'list' , '-g' , '--depth' ,  '0' ,  'ember-cli' ] , { encoding : 'utf8' } );
            if ( child.status !== 0 ) {
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Ember Added */
    /* ------------------------------------------------------------------------------------------------ */
    checkEmberAdded: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './package.json' ) );
            if ( ( data.hasOwnProperty( 'devDependencies' ) && !data.devDependencies.hasOwnProperty( 'ember-cli' ) ) && ( data.hasOwnProperty( 'dependencies' ) && !data.dependencies.hasOwnProperty( 'ember-cli' ) ) ) {
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Capacitor Added */
    /* ------------------------------------------------------------------------------------------------ */
    checkCapacitorAdded: function() {
        try {
            let data = JSON.parse( fs.readFileSync( './package.json' ) );
            if ( ( data.hasOwnProperty( 'devDependencies' ) && !data.devDependencies.hasOwnProperty( '@capacitor/cli' ) ) && ( data.hasOwnProperty( 'dependencies' ) && !data.dependencies.hasOwnProperty( '@capacitor/cli' ) ) ) {          
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Capacitor Initiated */
    /* ------------------------------------------------------------------------------------------------ */
    checkCapacitorInitiated: function() {
        try {
            if ( !fs.existsSync( './capacitor.config.json' ) ) {
                return false;
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
    
    
    
    
    
    
    
    /* Add Platform */
    /* ------------------------------------------------------------------------------------------------ */
    addPlatform: function( platform ) {
        try {
            const child = spawnSync( 'npx' , [ 'cap' , 'add' , platform ] , { encoding : 'utf8' } );
            console.log( child.stdout );
            if ( child.status !== 0 ) {
                throw child.stderr;
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
            const child = spawnSync( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] , { encoding : 'utf8' } );
            console.log( child.stdout );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
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
            const child = spawnSync( 'npx' , [ 'cap' , 'init' , '--web-dir' , 'dist' , 'ember-capacitor-app' , 'com.example.app' ] , { encoding : 'utf8' } ); //ALERT
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
    
    
    
    
    /* Check App Name */
    /* ------------------------------------------------------------------------------------------------ */
    checkAppName: function( name ) {
        try {
            if ( name === undefined || /\s/g.test( name ) ) {
                return false;
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
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* New Ember App */
    /* ------------------------------------------------------------------------------------------------ */
    newEmberApp: function( name ) {
        try {
            const child = spawnSync( 'ember' , [ 'new' , name ] , { encoding : 'utf8' } );
            if ( child.status !== 0 ) {
                throw child.stderr;
            }
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
                return false;
            }
            let data = fs.readFileSync( './android/app/src/main/AndroidManifest.xml' , 'utf-8' );
            data = data.replace( '<application\n' , '<application\n\tandroid:usesCleartextTraffic="true"\n' );
            fs.writeFileSync( './android/app/src/main/AndroidManifest.xml' , data );
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
    
    
    
    
    
    
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
    
    
    
    
    
    
    
    
    
    
    
    
    /* Check Package JSON */
    /* ------------------------------------------------------------------------------------------------ */
    checkPackageJSON: function() {
        try {
            let rawdata = fs.readFileSync( './package.json' );
            if ( !rawdata ) {
                return false;
            }
            let data = JSON.parse( rawdata );
            if ( !data || typeof data !== 'object' || ( !data.hasOwnProperty( 'devDependencies' ) && !data.hasOwnProperty( 'dependencies' ) ) ) {
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* Check File Exists */
    /* ------------------------------------------------------------------------------------------------ */
    checkFileExists: function( file ) {
        try {
            if ( fs.existsSync( file ) ) {
                return true;
            }
            return false;
        } catch( error ) {
            console.log( error );
            return false;
        }
    },
    
    /* Check Folder Exists */
    /* ------------------------------------------------------------------------------------------------ */
    checkFolderExists: function( path ) {
        try {
            if ( fs.existsSync( path ) && fs.lstatSync( path ).isDirectory() ) {
                return true;
            }
            return false;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
    /* App Directory */
    /* ------------------------------------------------------------------------------------------------ */
    appDirectory: function( path ) {
        try {
            process.chdir( path + '/' );
            if ( !process.cwd().endsWith( path ) ){
                return false;
            }
            return true;
        } catch( error ) {
            console.log( error );
            return false;
        }
    }
    
}