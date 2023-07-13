/**
 * This file is the entry point for the Electron application.
 * It sets up the main window and loads the app's HTML.
 */

console.log('Hello from Electron 👋')

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./dist/yt-down/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

})




// const {app, BrowserWindow} = require('electron')
//     const url = require("url");
//     const path = require("path");

//     let mainWindow

//     function createWindow () {
//       mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//           nodeIntegration: true
//         }
//       })

//       mainWindow.loadURL(
//         url.format({
//           pathname: path.join(__dirname, `/dist/electron-app/index.html`),
//           protocol: "file:",
//           slashes: true
//         })
//       );
//       // Open the DevTools.
//       mainWindow.webContents.openDevTools()

//       mainWindow.on('closed', function () {
//         mainWindow = null
//       })
//     }

//     app.on('ready', createWindow)

//     app.on('window-all-closed', function () {
//       if (process.platform !== 'darwin') app.quit()
//     })

//     app.on('activate', function () {
//       if (mainWindow === null) createWindow()
//     })
