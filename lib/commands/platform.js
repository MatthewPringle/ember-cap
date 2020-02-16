'use strict';

/* Ember Capacitor - Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
const utils     = require( '../utils/index.js'     );
const android   = require( '../android/index.js'   );
const capacitor = require( '../capacitor/index.js' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Commands */
    /* ------------------------------------------------------------------------------------------------ */
    platforms: [ 'ios' , 'android' ],
    
    platformsNew: [
        { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
        { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
    ],
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            process.stdout.write( ' - Platform\r\n' );
            
            console.log( args );
            
            /* Command */            
            let platform = this.platformsNew.find( item => { return item.platform === args[ 4 ] }); // check args[4] exists
            console.log( platform );
            
            /* Check Command */
            if ( !platform ) {
                throw 'No Platform Selected';
            }
            
            /* Check Platform Exists */
            if ( utils.checkFolderExists( platform.path ) ) {
                throw platform.title + ' already exists';
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
            
            /* Check Dist */
            if ( !capacitor.checkDist() ) {
                throw 'Cannot find dist/';
            }
            
            /* Add Platform*/
            if ( !capacitor.add( platform ) ) {
                throw 'Cannot add ' + platform.title + ' platform';
            }
            
            /* Android Manifest */
            if ( !android.updateManifest() ) {
                throw 'Unable to find AndroidManifest.xml';
            }
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}