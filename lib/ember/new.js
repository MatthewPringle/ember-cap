'use strict';

/* Ember Capacitor - Ember - New */
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
module.exports = async function( name ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Creating new Ember app' ).start();
        
        /* Sleep */
        //await sleep( 2000 );
        
        /* Search For Ember */
        await exec( 'ember new ' + name , { encoding : 'utf8' , shell: false } );
        
        /* Sleep */
        //await sleep( 2000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Ember app created' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not create new Ember app' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}