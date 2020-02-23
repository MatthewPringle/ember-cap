'use strict';

/* Ember Capacitor - Capacitor - Install */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );
const ora       = require( 'ora' );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Installing Capacitor' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Install Capacitor */
        await exec( 'npm install --save @capacitor/core @capacitor/cli' , { encoding : 'utf8' , shell: false } );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Capacitor installed' );
                
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not install Capacitor' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}