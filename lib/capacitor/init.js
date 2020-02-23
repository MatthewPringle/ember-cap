'use strict';

/* Ember Capacitor - Capacitor - Init */
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
module.exports = async function( name , id ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Initiating Capacitor' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Init Capacitor */
        await exec( 'npx cap init --web-dir dist ' + name + ' ' + id , { encoding : 'utf8' , shell: false } );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Capacitor initiated' );
                
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not initiate Capacitor' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}