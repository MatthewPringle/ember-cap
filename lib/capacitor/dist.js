'use strict';

/* Ember Capacitor - Capacitor - Dist */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const access    = promisify( fs.access );
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
        
        /* Message */
        this.spinner.text = 'Checking for /dist';
        
        /* Check File Exists */
        await access( './dist' );
        
        /* Sleep */
        await sleep( 1000 );
        
        
        
        
        
        
        
        /* Stop Spinner */
        this.spinner.succeed( 'Found' );
                
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot find dist/' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}