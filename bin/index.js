#!/usr/bin/env node
'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapInit  = require( '../lib/init'  );
const emberCapAdd   = require( '../lib/add'   );
const emberCapServe = require( '../lib/serve' );
const emberCapBuild = require( '../lib/build' );

/* Commands */
/* ---------------------------------------------------------------------------------------------------- */
if ( !process.argv[ 2 ] ) {
    console.log( 'Command Not Found!' );
    
/* Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'init' ) {
    emberCapInit.run();
    
/* Commands - Platform */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'platform' ) {
    
    /* Add - iOS */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] === 'add' && process.argv[ 4 ] === 'ios' ) {        
        emberCapAdd.ios();
        
    /* Add - Android */
    /* ------------------------------------------------------------------------------------------------ */
    } else if ( process.argv[ 3 ] === 'add' && process.argv[ 4 ] === 'android' ) {
        emberCapAdd.android();
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        console.log( 'No Platform Selected' );
    }
    
/* Commands - Serve */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'serve' ) {
    
    /* Serve - iOS */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] === 'ios' ) {
        emberCapServe.ios();
        
    /* Serve - Android */
    /* ------------------------------------------------------------------------------------------------ */
    } else if ( process.argv[ 3 ] === 'android' ) {
        emberCapServe.android();
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        console.log( 'No Platform Selected' );
    }
    
/* Commands - Build */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'build' ) {
    
    /* Build - iOS */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] === 'ios' ) {
        emberCapBuild.ios();
        
    /* Build - Android */
    /* ------------------------------------------------------------------------------------------------ */
    } else if ( process.argv[ 3 ] === 'android' ) {
        emberCapBuild.android();
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        console.log( 'No Platform Selected' );
    }
    
/* Commands - Error */
/* ---------------------------------------------------------------------------------------------------- */
} else {
    console.log( 'Command Not Found!' );
}