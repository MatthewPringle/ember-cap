/* Ember Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const utils = require( '../lib/utils' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function() {
        try {
            
            /* Check File Exists */
            if ( !utils.checkFileExists( './package.json' ) ) {
                throw 'Unable to find package.json.';
            }
            
            /* Check File Valid */
            if ( !utils.checkPackageJSON() ) {
                throw 'Invalid package.json';
            }
            
            /* Check Ember Added */
            if ( !this.checkEmberAdded() ) {
                throw 'An Ember app must be created before running ember-cap init';
            }
            
            /* Check Capacitor Added */
            if ( utils.checkCapacitorAdded() ) {
                throw 'Capacitor already installed';
            }
            
            /* Install Capacitor */
            if ( !utils.installCapacitor() ) {
                throw 'Unable to install Capacitor';
            }
            
            /* Init Capacitor */
            if ( !utils.initCapacitor() ) {
                throw 'Unable to initiate Capacitor';
            }
            
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