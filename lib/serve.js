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
            
            console.log( 'Serving iOS' );
        
            /* Return */
            return true;
        
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    },
    
    /* Android */
    /* ------------------------------------------------------------------------------------------------ */
    android: function() {
        try {
            
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
            
            console.log( 'Serving Android' );
        
            /* Return */
            return true;
        
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
            return false;
        }
        
    }
        
}