'use strict';

/* Ember Capacitor - Capacitor - Remove Server */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        let data = JSON.parse( fs.readFileSync( './capacitor.config.json' ) );
        if ( data.hasOwnProperty( 'server' ) && data.server.hasOwnProperty( 'url' ) ) {
            delete data.server.url;
        }
        fs.writeFileSync( './capacitor.config.json' , JSON.stringify( data , null , '\t' ) );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}