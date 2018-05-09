const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false, maximizable: true, show: false})

  splash = new BrowserWindow({width: 800, height: 600, frame: false});

  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
    splash.destroy();
    mainWindow.show();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
