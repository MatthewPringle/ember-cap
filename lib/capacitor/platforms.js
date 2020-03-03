'use strict';

/* Ember Capacitor - Capacitor - Platforms */
/* ---------------------------------------------------------------------------------------------------- */
const platforms: [
    { 'platform': 'ios'     , 'path': './ios'     , 'title': 'iOS'     },
    { 'platform': 'android' , 'path': './android' , 'title': 'Android' }
];

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = async function( arg ) {
    try {
        
        /* Platform */
        let platform = platforms.find( item => { return item.platform === arg });
        
        /* Check Platform */
        if ( !platform ) {
            throw 'No Platform Selected';
        }
        
        /* Return */
        return platform;
        
    } catch( error ) {
        throw error;
    }
}