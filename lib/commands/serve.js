'use strict';

/* Ember Capacitor - Commands - Serve */
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
            process.stdout.write( ' - Serve\r\n' );
            
            /* Command */            
            let platform = this.platforms.find( item => { return item.platform === args[ 3 ] });
            
            /* Check Command */
            if ( !platform ) {
                throw 'No Platform Selected';
            }
            
            /* Check Platform Exists */
            if ( !utils.folderExists( platform.path ) ) {
                throw platform.title + ' doesnt exists';
            }
            
            /* Check File Exists */
            if ( !utils.fileExists( './package.json' ) ) {
                throw 'Unable to find package.json.';
            }
            
            /* Check Capacitor Added */
            if ( !capacitor.added() ) {
                throw 'Capacitor must be installed before running ember-cap platform add';
            }
            
            /* Check Capacitor Initiated */
            if ( !capacitor.initiated() ) {
                throw 'Capacitor must be initiated before running ember-cap platform add';
            }
            
            /* Capacitor Serve */
            if ( !capacitor.serve() ) {
                throw 'Cannot update capacitor.config.json';
            }
            
            /* Sync Platform */
            if ( !capacitor.sync( platform ) ) {
                throw 'Cannot sync platform ' + platform.title;
            }
            
            /* Open Platform */
            if ( !capacitor.open( platform ) ) {
                throw 'Cannot open platform ' + platform.title;
            }
            
            /* Message */
            console.log( 'Serving ' + platform.title );
            
            /* Serve */
            ember.serve();
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}