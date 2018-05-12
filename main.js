const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain
const path = require('path')
const url = require('url')
const Menu = electron.Menu;

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, maximizable: true, show: false, resizable: true})

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

  const template = [
    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'GitHub page',
          click () { require('electron').shell.openExternal('https://github.com/ivan770/pinesql') }
        },
        {
          label: 'License',
          click () { require('electron').shell.openExternal('https://raw.githubusercontent.com/ivan770/pinesql/master/LICENSE') }
        },
        {
        type: 'separator'
        },
        {
          label: 'Created by ivan770',
          enabled: false
        }]
      }];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

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

ipc.on('developer', function (event) {
  mainWindow.webContents.openDevTools()
})

ipc.on('exit', function (event) {
  app.exit()
})
