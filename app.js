const electron = require('electron');
const url = require('url');
const path = require('path');
const remote = require('electron').remote;
const {app, BrowserWindow, Menu} = electron;

let mainWindow, forkWindow, menuTemp;

//set env
process.env.NODE_ENV = 'production';

//Listen for the app to be ready
app.on('ready', ()=>{
    app.on('browser-window-created',function(e,window) {
        window.setMenu(null);
        });

    //create new window
    mainWindow = new BrowserWindow({width: 800, height: 500, frame: false});
    
    //load html into the window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //quit app
    mainWindow.on('closed', ()=>{
        app.quit();
    });
});