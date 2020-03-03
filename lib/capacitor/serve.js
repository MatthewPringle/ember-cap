'use strict';

/* Ember Capacitor - Capacitor - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const ip    = require( 'ip' );
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
        
        /* Add Live Reload Server */
        if ( !data.hasOwnProperty( 'server' ) ) {
            data.server = {}
        }
        data.server.url = 'http://' + ip.address() + ':4200';
        
        /* Save Config */
        await utils.saveJSON( './capacitor.config.json' , data );
        
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