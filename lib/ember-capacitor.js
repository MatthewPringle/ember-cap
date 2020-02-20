'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapacitorCommands = require( '../lib/commands/index.js' );
const xml2js                 = require( 'xml2js' );
const util                   = require( 'util' );
const fs                     = require( 'fs' );
const ora                    = require( 'ora' );

//https://stackoverflow.com/questions/45333264/how-to-get-xml2js-results-out-of-the-parser-in-es6
//https://nodejs.org/api/util.html#util_util_promisify_original
//https://github.com/isleofcode/corber/blob/master/lib/utils/parse-xml.js
//https://github.com/isleofcode/corber/blob/master/lib/targets/cordova/utils/edit-xml.js

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Sleep */
    /* ------------------------------------------------------------------------------------------------ */
    sleep: function( ms ) {
        return new Promise(resolve => setTimeout( resolve , ms ) );
    },
        
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            /* Start Spinner */
            this.spinner = ora( 'Updating AndroidManifest.xml' ).start();
            await this.sleep( 5000 );
            
            
            
            
            
            
            
            
            
            
            
            
            /* Stop Spinner */
            this.spinner.stop();
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            
            this.spinner.stop();
            
            console.log( 'catch' );
            
            process.stdout.write( '\r\n' );
            
            console.log( error );
        
        }
        
    }
    
}