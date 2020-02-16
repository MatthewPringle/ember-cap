'use strict';

/* Ember Capacitor - Commands - Build */
/* ---------------------------------------------------------------------------------------------------- */
const ember     = require( '../ember/index'     );
const capacitor = require( '../capacitor/index' );
const utils     = require( '../utils/index'     );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Platforms */
    /* ------------------------------------------------------------------------------------------------ */    
    platforms: [
        { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
        { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
    ],
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Build\r\n' );
            
            console.log( args );
            
            /* Command */            
            let platform = this.platforms.find( item => { return item.platform === args[ 3 ] }); // check args[3] exists
            console.log( platform );
            
            /* Check Command */
            if ( !platform ) {
                throw 'No Platform Selected';
            }
            
            /* Check Platform Exists */
            if ( !utils.checkFolderExists( platform.path ) ) {
                throw platform.title + ' doesnt exists';
            }
            
            /* Check File Exists */
            if ( !utils.checkFileExists( './package.json' ) ) {
                throw 'Unable to find package.json.';
            }
            
            /* Check Capacitor Added */
            if ( !capacitor.checkAdded() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
            
            /* Check Capacitor Initiated */
            if ( !capacitor.checkInitiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Remove Server */
            if ( !capacitor.removeServer() ) {
                throw 'Cannot update capacitor.config.json';
            }
            
            /* Message */
            console.log( 'Building ' + platform.title );
            
            /* Build */
            ember.build();
            
            /* Sync Platform */
            if ( !capacitor.sync( platform ) ) {
                throw 'Cannot sync platform ' + platform.title;
            }
            
            /* Open Platform */
            if ( !capacitor.open( platform ) ) {
                throw 'Cannot open platform ' + platform.title;
            }
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}