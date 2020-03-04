'use strict';

/* Ember Capacitor - Capacitor - Build */
/* ---------------------------------------------------------------------------------------------------- */
const ora   = require( 'ora' );
const utils = require( '../utils/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( platform ) {
    try {
        
        /* Start Spinner */
        this.spinner = ora( 'Updating capacitor.config.json' ).start();
        
        /* Load Config */
        let data = await utils.loadJSON( './capacitor.config.json' );
        
        /* Remove Live Reload Server */
        if ( data.hasOwnProperty( 'server' ) && data.server.hasOwnProperty( 'url' ) ) {
            delete data.server.url;
        }
        
        /* Save Config */
        await utils.saveJSON( './capacitor.config.json' , data );
        
        /* Stop Spinner */
        this.spinner.succeed( 'Updated capacitor.config.json' );
        
    } catch( error ) {
        
        /* Stop Spinner */
        this.spinner.fail( 'Cannot update capacitor.config.json' );
        
        /* Throw Error */
        throw error;
        
    }
}