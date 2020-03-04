'use strict';

/* Ember Capacitor - Capacitor - Dist */
/* ---------------------------------------------------------------------------------------------------- */
const ora       = require( 'ora' );
const promisify = require( 'util' ).promisify;
const lstat     = promisify( require( 'fs' ).lstat );
const mkdir     = promisify( require( 'fs' ).mkdir );
const unlink    = promisify( require( 'fs' ).unlink );
const writeFile = promisify( require( 'fs' ).writeFile );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function() {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Checking for ./dist' ).start();
        
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
            
            /* Create Directory */
            await mkdir( './dist' );
            
        }
        
        /* Check File Exists */
        try {
            
            /* Load File */
            await lstat( './dist/index.html' );
            
        } catch( error ) {
            
            /* Create File */
            await writeFile( './dist/index.html' , '' );
            
        }
        
        /* Stop Spinner */
        this.spinner.succeed( 'Found ./dist' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Could not find ./dist' );
        
        /* Throw Error */
        throw error;
        
    }
}