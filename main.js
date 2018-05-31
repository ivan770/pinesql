const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain
const path = require('path')
const url = require('url')
const Menu = electron.Menu
const settings = require('electron-settings');

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        maximizable: true,
        show: false,
        resizable: true,
        icon: path.join(__dirname, 'img/icon.png')
    })

    splash = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        icon: path.join(__dirname, 'img/icon.png')
    })

    assistantWin = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        icon: path.join(__dirname, 'img/icon.png')
    })

    settingsWin = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      icon: path.join(__dirname, 'img/icon.png')
    })

    assistantWin.loadURL(`file://${__dirname}/construct.html`)
    splash.loadURL(`file://${__dirname}/splash.html`)
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    settingsWin.loadURL(`file://${__dirname}/settings.html`)

    mainWindow.on('closed', function() {
        mainWindow = null
        assistantWin.destroy()
        settingsWin.destroy()
    })

    assistantWin.on('close', function(event) {
        assistantWin.hide()
        event.preventDefault()
    })

    settingsWin.on('close', function(event) {
        settingsWin.hide()
        event.preventDefault()
    })

    mainWindow.once('ready-to-show', () => {
        splash.destroy()
        mainWindow.show()
        if(settings.has('settings_build') === false){
          settings.set('settings_build', true)
        }
        if(settings.has('settings_functiontime') === false){
          settings.set('settings_functiontime', true)
        }
        if(settings.has('settings_developer') === false){
          settings.set('settings_developer', false)
        }
    })

    const template = [{
            label: 'File',
            submenu: [{
                label: 'Settings',
                  click() {
                    settingsWin.show()
                  }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [{
                    label: 'GitHub page',
                    click() {
                        require('electron').shell.openExternal('https://github.com/ivan770/pinesql')
                    }
                },
                {
                    label: 'License',
                    click() {
                        require('electron').shell.openExternal('https://raw.githubusercontent.com/ivan770/pinesql/master/LICENSE')
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Created by ivan770',
                    enabled: false
                }
            ]
        }
    ]

    Menu.setApplicationMenu(null)
    const menu = Menu.buildFromTemplate(template)
    mainWindow.setMenu(menu)
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})

ipc.on('developer', function(event) {
    mainWindow.webContents.openDevTools()
    settingsWin.webContents.openDevTools()
})

ipc.on('exit', function(event) {
    app.exit()
})

ipc.on('buildOpen', function(event) {
    assistantWin.show()
})

ipc.on('build', function(event, arg1, arg2) {
  assistantWin.webContents.send('build', arg1, arg2);
})

ipc.on('build_clear', function(event) {
  assistantWin.webContents.send('clear');
})

ipc.on('lang_detect', (event) => {
   event.sender.send('lang_detect_reply', app.getLocale())
 })
