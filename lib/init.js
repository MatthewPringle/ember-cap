/* Ember Capacitor - Init */
/* ---------------------------------------------------------------------------------------------------- */
const { spawn } = require('child_process');

/* Export */
/* ---------------------------------------------------------------------------------------------------- */
module.exports = {

    /* Run */
    /* ------------------------------------------------------------------------------------------------ */
    run: function() {
        
        console.log( 'Installing Capacitor' );
        
        this.test2();
        
    },
    
    
    
    test2: function() {
        
        //const child = spawn( 'ls' , [ '-lh' , '/usr' ] );
        
        //const child = spawn( 'npm install --save @capacitor/core @capacitor/cli' );
        
        const child = spawn( 'npm' , [ 'install' , '--save' , '@capacitor/core' , '@capacitor/cli' ] );
    
    },
    
    
    
    test: function() {
        
        
        const ls = spawn('ls', ['-lh', '/usr']);
        
        ls.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
        });
        
        ls.stderr.on('data', (data) => {
          console.log(`stderr: ${data}`);
        });
        
        ls.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
        });
        
    }

}

//https://forum.ionicframework.com/t/ember-integration/177429
//https://nodejs.org/docs/v8.1.4/api/child_process.html#child_process_child_process_spawn_command_args_options
//https://nodejs.org/docs/v8.1.4/api/child_process.html#child_process_child_process_spawnsync_command_args_options
//https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
//https://github.com/isleofcode/corber/blob/master/lib/utils/spawn.js