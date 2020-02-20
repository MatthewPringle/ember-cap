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
            
            /* Message */
            console.clear();
            process.stdout.write( '\r\nEmber Capacitor' );
            
            console.log( '---' );
            
            
            await this.sleep( 5000 );
            
            /* Start Spinner */
            this.spinner = ora( 'Loading AndroidManifest.xml' ).start();
            const data = await util.promisify( fs.readFile )( './AndroidManifest.xml' , 'utf-8' );
            
            await this.sleep( 5000 );
            
            this.spinner.text = 'Parsing AndroidManifest.xml';
            const parser = new xml2js.Parser();
            const result = await util.promisify( parser.parseString.bind( parser ) )( 'dsfdsf' );
            
            await this.sleep( 5000 );
            
            this.spinner.text = 'Saving AndroidManifest.xml';
            const builder = new xml2js.Builder({ renderOpts: { 'pretty': true , 'indent': '    ', 'newline': '\n' } });
            let xml = builder.buildObject( result );
            await util.promisify( fs.writeFile )( './AndroidManifest2.xml' , xml );
                        
            await this.sleep( 5000 );
            
            /* Stop Spinner */
            //this.spinner.stop();
            
            this.spinner.succeed( 'Updated AndroidManifest.xml' );
            
            console.log( 'Done' );
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            
            this.spinner.fail( 'Failed to updated AndroidManifest.xml' );
            
            console.log( 'catch' );
            
            process.stdout.write( '\r\n' );
            
            console.log( error );
            
        }
        
    }
    
}