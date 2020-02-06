/* Ember Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const { spawn } = require( 'child_process' );
const fs        = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function() {
        
        /* Perform Checks */
        if ( this.checkPackage() ) {
            
            /* Install Capacitor */
            this.installCapacitor();
            
        } else {
            
            /* Message */
            console.log( 'Unable to find package.json.' );
            
            /* Message */
            console.log( 'Ember must be installed before running ember-cap init' );
            
        }
        
    },
    
    /* Check Package */
    /* ------------------------------------------------------------------------------------------------ */
    checkPackage: function() {
        try {
            return fs.existsSync( './package.json' );
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
        const child = spawn( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] );
        
        
        child.stdout.on( 'data' , function( data ) {
            
            console.log( `stdout: ${data}` );
        
        });
        
        child.stderr.on( 'data' , function( data ) {
            
            console.log( `stderr: ${data}` );
        
        });
        
        child.on( 'close' , function( code ) {
            
            console.log( `child process exited with code ${code}` );
        
        });
        
        
        
        /* Message */
        console.log( 'Capacitor Installed' );
        
    },
    
    
    
    
    
    
    
    
    
    
    
    /* Install Capacitor */
    /* ------------------------------------------------------------------------------------------------ */
    installCapacitorOld: function() {
        
        const child = spawn( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] );
        
        child.stdout.on( 'data' , function( data ) {
            
            console.log( `stdout: ${data}` );
        
        });
        
        child.stderr.on( 'data' , function( data ) {
            
            console.log( `stderr: ${data}` );
        
        });
        
        child.on( 'close' , function( code ) {
            
            console.log( `child process exited with code ${code}` );
        
        });
        
        console.log( 'Complete' );
        
        /*
        child.stdout.on('data', (data) => {
            
            console.log(`stdout: ${data}`);
        
        });
        
        child.stderr.on('data', (data) => {
            
            console.log(`stderr: ${data}`);
        
        });
        
        child.on('close', (code) => {
            
            console.log(`child process exited with code ${code}`);
        
        });
        */
        
    }

}