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
    
    
    
    parseXMLOld: function( path ) {
        
        console.log( '2' );
        
        let data = fs.readFileSync( path , 'utf-8' );
        
        console.log( '3' );
        
        return data;
    
    },
    
    
    
    parseXML: async function( path ) {
        
        await this.sleep( 5000 );
        
        const data = await util.promisify( fs.readFile )( path , 'utf-8' );
        
        return data;
        
    },
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            this.spinner = ora( 'Testing' ).start();
            
            console.log( '1' );
            
            let data = await this.parseXML( './AndroidManifest.xml' );
            
            //let data = await this.parseXML( './test.xml' );
            
            //console.log( data );
            
            console.log( '2' );
            
            const parser = new xml2js.Parser();
            
            const result = await util.promisify( parser.parseString.bind( parser ) )( data );        
            
            console.log( result );
            
            console.log( '3' );
            
            //let string = await parser.parseString( data );
            
            //console.log( string );
            
            
            
            
            console.log( 'End' );
            this.spinner.stop();
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            this.spinner.stop();
            console.log( 'catch' );
            //process.stdout.write( '\r\n' );
            console.log( error );
        }
        
    }
    
}