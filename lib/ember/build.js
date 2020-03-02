'use strict';

/* Ember Capacitor - Ember - Build */
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
        this.spinner = ora( 'Building Ember' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Build Ember */
        await exec( 'ember build --environment=production' , { encoding : 'utf8' , shell: false } );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Ember Built' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot build Ember' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}