'use strict';

/* Ember Capacitor - Capacitor - Build */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Path */
/* ---------------------------------------------------------------------------------------------------- */
const path = './capacitor.config.json';

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Updating capacitor.config.json' ).start();
        
        /* Load Config */
        let data = await utils.loadJSON( path );
        
        /* Remove Live Reload Server */
        if ( data.hasOwnProperty( 'server' ) && data.server.hasOwnProperty( 'url' ) ) {
            delete data.server.url;
        }
        
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