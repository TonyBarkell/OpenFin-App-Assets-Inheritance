

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

function openChildApp(){
    const app = fin.desktop.Application.getCurrent();

    app.getInfo(info => {
        var app = new fin.desktop.Application({
            url: info.initialOptions.url,
            uuid: "Child-App" + random(),
            name: "ChildApp" + random(),
            mainWindowOptions: {
                defaultHeight: 600,
                defaultWidth: 800,
                defaultTop: 300,
                defaultLeft: 300,
                autoShow: true
            }
        }, function () {
            console.log("Application successfully created");
            app.run();
        }, function (error) {
            console.log("Error creating application:", error);
        });
    });

};

function random() {
    return "" + Math.random() * 1000;
}
