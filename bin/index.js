#!/usr/bin/env node

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */

//corber init
//corber start
//corber build --platform=ios --environment=production
//corber build --platform=ios --environment=production --release

//cordova platform add <platform name>
//cordova create <path>
//cordova run <platform name>

//https://forum.ionicframework.com/t/ember-integration/177429
//ember-capacitor-init.sh
//ember-capacitor-add-ios.sh
//ember-capacitor-add-android.sh
//ember-capacitor-serve-ios.sh
//ember-capacitor-serve-android.sh
//ember-capacitor-build-ios.sh
//ember-capacitor-build-android.sh


/* Commands */
/* ---------------------------------------------------------------------------------------------------- */
if ( !process.argv[ 2 ] ) {
    
    console.log( 'No Command' );
    
/* Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'init' ) {
    
    console.log( 'INIT' );
    
/* Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'platform' ) {
    
    /* Add - iOS */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] === 'add' && process.argv[ 4 ] === 'ios' ) {
        
        console.log( 'Adding Platform iOS' );
        
    /* Add - Android */
    /* ------------------------------------------------------------------------------------------------ */
    } else if ( process.argv[ 3 ] === 'add' && process.argv[ 4 ] === 'android' ) {
        
        console.log( 'Adding Platform Android' );
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        
        console.log( 'No Platform Selected' );
        
    }

}