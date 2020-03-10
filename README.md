# ember-cap
Ember Capacitor

## Commands

### Install
```
npm install -g ember-cap
```

### Create a new Ember application & initialise Capacitor
```
ember-cap new <example-app> <com.example.app>
```
This will create a new Ember application and then initialise Capacitor. This is equivalent to running the following commands.
```
ember new <example-app>
cd <example-app>
npm install --save @capacitor/core @capacitor/cli
npx cap init --web-dir dist <example-app> <com.example.app>
```

### Or initialise Capacitor in an existing Ember application
```
ember-cap init <example-app> <com.example.app>
```

### Add the platform/s you require
```
ember-cap add ios
ember-cap add android
```

### Serve the Ember application to a simulator / device on a local network. You will need to run the app using Xcode / Android Studio
```
ember-cap serve ios
ember-cap serve android
```

### Build the Ember application and add to the platform ready for build and deployment using Xcode / Android Studio
```
ember-cap build ios
ember-cap build android
```

### environment.js / target.js
You can access the following environment variables in your Ember environment.js & target.js
```
process.env.CAPACITOR = true / false  
```
```
process.env.PLATFORM = ios / android  
```
```
environment.js

module.exports = function( environment ) {
    let ENV = {
        modulePrefix: 'example-app',
        environment,
        rootURL: '/',
        locationType: 'auto',
    }
    if ( process.env.CAPACITOR ) {   
        if ( process.env.PLATFORM === 'ios' ) {
        }
        if ( process.env.PLATFORM === 'android' ) {
        }
    }
    return ENV;
};
```