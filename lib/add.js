/* Ember Capacitor - Add */
/* ---------------------------------------------------------------------------------------------------- */
const utils = require( '../lib/utils' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* iOS */
    /* ------------------------------------------------------------------------------------------------ */
    ios: function () {
        try {
            
            console.log( 'Adding iOS' );
            
            /* Check iOS */
            if ( utils.checkFolderExists( './ios' ) ) {
                throw 'iOS already exists';
            }
            
            /* Check Capacitor Added */
            if ( !utils.checkCapacitorAdded() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
            
            /* Check Capacitor Initiated */
            if ( !utils.checkCapacitorInitiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Check Dist */
            if ( !utils.checkDist() ) {
                throw 'Cannot find dist/';
            }
            
            /* Add iOS */
            if ( !utils.addPlatform( 'ios' ) ) {
                throw 'Cannot add iOS platform';
            }
            
            /* Return */
            return true;
            
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    },
    
    /* Android */
    /* ------------------------------------------------------------------------------------------------ */
    android: function() {
        try {
            
            console.log( 'Adding Android' );
            
            /* Check Android */
            if ( utils.checkFolderExists( './android' ) ) {
                throw 'Android already exists';
            }
            
            /* Check Capacitor Added */
            if ( !utils.checkCapacitorAdded() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
            
            /* Check Capacitor Initiated */
            if ( !utils.checkCapacitorInitiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Check Dist */
            if ( !utils.checkDist() ) {
                throw 'Cannot find dist/';
            }
            
            /* Add Android */
            if ( !utils.addPlatform( 'android' ) ) {
                throw 'Cannot add Android platform';
            }
            
            /* Android Manifest */
            if ( !utils.updateAndroidManifest() ) {
                throw 'Unable to find AndroidManifest.xml';
            }
            
            /* Return */
            return true;
            
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    }
    
}