/* Ember Capacitor - Serve */
/* ---------------------------------------------------------------------------------------------------- */
const utils = require( '../lib/utils' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* iOS */
    /* ------------------------------------------------------------------------------------------------ */
    ios: function () {
        try {
        
            console.log( 'Serving iOS' );
            
            /* Check iOS */
            if ( !utils.checkFolderExists( './ios' ) ) {
                throw 'iOS doesnt exist';
            }
            
            /* Check Capacitor Added */
            if ( !utils.checkCapacitorAdded() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
                
            /* Check Capacitor Initiated */
            if ( !utils.checkCapacitorInitiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Update Config */
            if ( !this.updateConfig() ) {
                throw 'Cannot update capacitor.config.json';
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
        
            console.log( 'Serving Android' );
            
            /* Check Android */
            if ( !utils.checkFolderExists( './android' ) ) {
                throw 'Android doesnt exist';
            }
            
            /* Check Capacitor Added */
            if ( !utils.checkCapacitorAdded() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
                
            /* Check Capacitor Initiated */
            if ( !utils.checkCapacitorInitiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Update Config */
            if ( !this.updateConfig() ) {
                throw 'Cannot update capacitor.config.json';
            }
        
            /* Return */
            return true;
            
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    }
        
}