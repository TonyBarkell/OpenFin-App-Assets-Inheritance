const liveServer = require('live-server');
const openfinConfigBuilder = require('openfin-config-builder');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

let target;
const configPath = path.resolve('public/config/app.json');
const serverParams = {
    root: path.resolve('public'),
    open: false,
    logLevel: 2
};

//Update our config and launch openfin.
function launchOpenFin() {
    openfinConfigBuilder.update({
        startup_app: {
            url: target + '/index.html',
            applicationIcon: target + '/favicon.ico'
        },
        shortcut: {
            icon: target + '/favicon.ico'
        },
        appAssets: [
            {
                src: target + '/assets/mspaint.zip',
                alias: 'paint',
                version: '1.1',
                target: 'mspaint.exe',
                mandatory: true 
            }
        ]
    }, configPath)
        .then(openfinLauncher.launchOpenFin({ configPath: configPath }))
        .catch(err => console.log(err));
}


//Start the server server and launch our app.
liveServer.start(serverParams).on('listening', () => {
    const { address, port } = liveServer.server.address();
    target = `http://localhost:${ port }`;
    launchOpenFin();
});