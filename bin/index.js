#!/usr/bin/env node
'use strict';

/* Ember Capacitor */
/* ---------------------------------------------------------------------------------------------------- */
const emberCapNew   = require( '../lib/new'   );
const emberCapInit  = require( '../lib/init'  );
const emberCapAdd   = require( '../lib/add'   );
const emberCapServe = require( '../lib/serve' );
const emberCapBuild = require( '../lib/build' );

const utils = require( '../lib/utils' );


const fs            = require( 'fs' );

/* Message */
/* ---------------------------------------------------------------------------------------------------- */
console.log( '\r\n\Ember Capacitor' );

/* Commands */
/* ---------------------------------------------------------------------------------------------------- */
if ( !process.argv[ 2 ] ) {
    console.log( 'Error: No arguments provided' );
    
/* Commands - New */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'new' ) {
    
    utils.test();
    
    /* Check */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] !== undefined && process.argv[ 4 ] !== undefined ) {
        //emberCapNew.run( process.argv[ 3 ] , process.argv[ 4 ] );
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        console.log( 'Error: No App Name / App Package ID' );
    }
    
/* Commands - Init */
/* ---------------------------------------------------------------------------------------------------- */
} else if ( process.argv[ 2 ] === 'init' ) {
    
    /* Check */
    /* ------------------------------------------------------------------------------------------------ */
    if ( process.argv[ 3 ] !== undefined && process.argv[ 4 ] !== undefined ) {
        emberCapInit.run( process.argv[ 3 ] , process.argv[ 4 ] );
        
    /* Error */
    /* ------------------------------------------------------------------------------------------------ */
    } else {
        console.log( 'Error: No App Name / App Package ID' );
    }
    
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
        console.log( 'Error: No Platform Selected' );
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
        console.log( 'Error: No Platform Selected' );
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
        console.log( 'Error: No Platform Selected' );
    }
    
/* Commands - Error */
/* ---------------------------------------------------------------------------------------------------- */
} else {
    console.log( 'Error: Command not found' );
}