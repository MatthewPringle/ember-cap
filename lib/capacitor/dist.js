'use strict';

/* Ember Capacitor - Capacitor - Dist */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const fs        = require( 'fs' );
const ora       = require( 'ora' );
const access    = promisify( fs.access );
const lstat     = promisify( fs.lstat );
const mkdir     = promisify( fs.mkdir );
const unlink    = promisify( fs.unlink );
const writeFile = promisify( fs.writeFile );

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
        this.spinner = ora( 'Checking for /dist' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Check Folder Exists */
        try {
            
            /* Load File / Folder */
            const dist = await lstat( './dist' );
            
            /* Check File */
            if ( dist.isFile() ) {
                
                /* Delete File */
                await unlink( './dist' );
                
                /* Throw Error */
                throw 'File exists';
                
            }
            
        } catch( error ) {
            
            /* Sleep */
            await sleep( 1000 );
            
            /* Message */
            this.spinner.text = 'Creating /dist';
            
            /* Create Directory */
            await mkdir( './dist' );
            
        }
        
        /* Check File Exists */
        try {
            
            /* Load File */
            const index = await lstat( './dist/index.html' );
            
        } catch( error ) {
            
            /* Sleep */
            await sleep( 1000 );
            
            /* Message */
            this.spinner.text = 'Creating /dist/index.html';
            
            /* Create File */
            await writeFile( './dist/index.html' , '' );
            
        }
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Found /dist' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot find dist/' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}