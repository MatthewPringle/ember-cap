'use strict';

/* Ember Capacitor - Capacitor - Update Manifest */
/* ---------------------------------------------------------------------------------------------------- */
const fs = require( 'fs' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = function() {
    try {
        if ( !fs.existsSync( './android/app/src/main/AndroidManifest.xml' ) ) {
            return false;
        }
        let data = fs.readFileSync( './android/app/src/main/AndroidManifest.xml' , 'utf-8' );
        data = data.replace( '<application\n' , '<application\n\tandroid:usesCleartextTraffic="true"\n' );
        fs.writeFileSync( './android/app/src/main/AndroidManifest.xml' , data );
        return true;
    } catch( error ) {
        console.log( error );
        return false;
    }
}