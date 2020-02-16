'use strict';

/* Ember Capacitor - Capacitor - Add Server */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );
const ip = require( 'ip' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        let data = JSON.parse( fs.readFileSync( './capacitor.config.json' ) );
        if ( !data.hasOwnProperty( 'server' ) ) {
            data.server = {}
        }
        data.server.url = 'http://' + ip.address() + ':4200';
        fs.writeFileSync( './capacitor.config.json' , JSON.stringify( data , null , '\t' ) );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}