'use strict';

/* Ember Capacitor - Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
const utils     = require( '../utils/index'     );
const android   = require( '../android/index'   );
const capacitor = require( '../capacitor/index' );

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {
    
    /* Platforms */
    /* ------------------------------------------------------------------------------------------------ */    
    //platforms: [
    //    { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
    //    { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
    //],
    
    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function( args ) {
        try {
            
            /* Message */
            //process.stdout.write( ' - Platform\r\n' );
            
            /* Command */            
            //let platform = this.platforms.find( item => { return item.platform === args[ 4 ] });
            
            /* Check Command */
            //if ( !platform ) {
            //    throw 'No Platform Selected';
            //}
            
            /* Check Platform Exists */
            if ( utils.folderExists( platform.path ) ) {
                throw platform.title + ' already exists';
            }
            
            /* Check File Exists */
            //if ( !utils.fileExists( './package.json' ) ) {
            //    throw 'Unable to find package.json.';
            //}
            
            /* Check Capacitor Added */
            //if ( !capacitor.added() ) {
            //    throw 'Capacitor must be installed before running ember-cap platform add';
            //}
            
            /* Check Capacitor Initiated */
            //if ( !capacitor.initiated() ) {
            //    throw 'Capacitor must be initiated before running ember-cap platform add';
            //}
            
            /* Check Dist */
            if ( !capacitor.dist() ) {
                throw 'Cannot find dist/';
            }
            
            /* Add Platform */
            if ( !capacitor.add( platform ) ) {
                throw 'Cannot add ' + platform.title + ' platform';
            }
            
            /* Android Manifest */
            if ( platform.platform === 'android' ) {
                if ( !android.updateManifest() ) {
                    throw 'Unable to find AndroidManifest.xml';
                }
            }
            
        /* Error */
        /* -------------------------------------------------------------------------------------------- */
        } catch( error ) {
            console.log( error );
        }
        
    }
    
}