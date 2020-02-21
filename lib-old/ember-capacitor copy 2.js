'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapacitorCommands = require( '../lib/commands/index.js' );
const xml2js                 = require( 'xml2js' );
const util                   = require('util');
const fs                     = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Sleep */
    /* ------------------------------------------------------------------------------------------------ */
    sleep: function( ms ) {
        return new Promise(resolve => setTimeout( resolve , ms ) );
    },
    
    
    
    parseXML: function( path ) {
        
        console.log( '2' );
        
        let data = fs.readFileSync( path , 'utf-8' );
        
        console.log( '3' );
        
        return data;
    
    },
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: async function( args ) {
        try {
            
            console.log( '1' );
            
            let data = this.parseXML( './AndroidManifest.xml' );
            
            console.log( '4' );
            
            let parser = new xml2js.Parser();
            
            parser.parseString( data , function( err , result ) {
                
                if (err) {
                    console.log( err );
                    //return reject(err);
                }
                
                if ( result ) {
                    console.log( result );
                    //resolve(result);
                }
                
            });
            
            await this.sleep( 3000 );
            
            console.log( '5' );
            
            //let string = await parser.parseString( data );
            
            //console.log( string );
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            process.stdout.write( '\r\n' );
            console.log( error );
        }
        
    }
    
}