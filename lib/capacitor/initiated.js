'use strict';

/* Ember Capacitor - Capacitor - Initiated */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const access    = promisify( fs.access );
const ora       = require( 'ora' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
        
        /* Message */
        this.spinner.text = 'Checking Capacitor initiated';
        
        /* Check File Exists */
        await access( './capacitor.config.json' );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Capacitor initiated' );
                
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Capacitor not initiated' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}