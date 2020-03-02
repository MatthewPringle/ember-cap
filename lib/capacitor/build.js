'use strict';

/* Ember Capacitor - Capacitor - Build */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Sleep */
/* ---------------------------------------------------------------------------------------------------- */
var sleep = function( ms ) {
    return new Promise(resolve => setTimeout( resolve , ms ) );
};

/* Path */
/* ---------------------------------------------------------------------------------------------------- */
const path = './capacitor.config.json';

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Loading capacitor.config.json' ).start();
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Parsing capacitor.config.json';
        
        /* Load Config */
        let data = await utils.loadJSON( path );
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Updating capacitor.config.json';
        
        /* Remove Live Reload Server */
        if ( data.hasOwnProperty( 'server' ) && data.server.hasOwnProperty( 'url' ) ) {
            delete data.server.url;
        }
        
        /* Sleep */
        await sleep( 1000 );
        
        /* Message */
        this.spinner.text = 'Saving capacitor.config.json';
        
        /* Save Config */
        await utils.saveJSON( path , data );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Updated capacitor.config.json' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot update capacitor.config.json' );
        
        /* Log Error */
        console.log( '\r\n' + error );
        
        /* Exit */
        process.exit( 1 );
        
    }
}