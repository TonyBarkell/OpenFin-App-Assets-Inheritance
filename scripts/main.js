function openAssetPaint(){
    /*
    * When called, if no arguments are passed then the arguments (if any)
    * are taken from the 'app.json' file, from the  'args' parameter
    * of the 'appAssets' Object with the relevant 'alias'.
    */
    fin.desktop.System.launchExternalProcess({
        //Additionally note that the executable found in the zip file specified in appAssets
        //will default to the one mentioned by appAssets.target
        //If the the path below refers to a specific path it will override this default
        alias: "paint",
        listener: function (result) {
            console.log('the exit code', result.exitCode);
        }
    }, function (payload) {
        console.log('Success:', payload.uuid);
    }, function (error) {
        console.log('Error:', error);
    });
}