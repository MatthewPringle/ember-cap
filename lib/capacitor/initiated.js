'use strict';

/* Ember Capacitor - Capacitor - Initiated */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const access    = promisify( require( 'fs' ).access );

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
        
        /* Throw Error */
        throw error;
        
    }
}