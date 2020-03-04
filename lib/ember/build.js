'use strict';

/* Ember Capacitor - Ember - Build */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const exec      = promisify( require( 'child_process' ).exec );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Building Ember' ).start();
        
        /* Build Ember */
        await exec( 'ember build --environment=production' , { encoding : 'utf8' , shell: false } );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Built Ember' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not build Ember' );
        
        /* Throw Error */
        throw error;
        
    }
}