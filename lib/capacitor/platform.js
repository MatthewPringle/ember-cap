'use strict';

/* Ember Capacitor - Capacitor - Platforms */
/* ---------------------------------------------------------------------------------------------------- */
const promisify = require( 'util' ).promisify;
const lstat     = promisify( require( 'fs' ).lstat );

/* Platforms */
/* ---------------------------------------------------------------------------------------------------- */
const platforms = [
    { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
    { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
];

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( arg , check ) {
    try {
        
        /* Platform */
        let platform = platforms.find( item => { return item.platform === arg });
        
        /* Check Platform */
        if ( !platform ) {
            
            /* Throw Error */
            throw 'Could not find platform ' + arg;
            
        }
        
        /* Check Exists */
        if ( check ) {
        
            /* Load File / Folder */
            let path = await lstat( platform.path );
            
            /* Check Folder */
            if ( !path.isDirectory() ) {
                
                /* Throw Error */
                throw 'Could not find platform ' + platform.title;
                
            }
        
        }
        
        /* Return */
        return platform;
        
    } catch( error ) {
        
        /* Throw Error */
        throw error;
        
    }
}