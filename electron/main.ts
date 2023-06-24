import { app, BrowserWindow, ipcMain, Tray } from 'electron'
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
const logoPath = path.join(process.env.PUBLIC, 'logo.png');

function createWindow() {
  win = new BrowserWindow({
    icon: logoPath,
    width:800,
    height:600,
    resizable:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

app.on('window-all-closed', () => {
  win = null
})

app.whenReady().then(() => {
  createWindow()
  // const appIcon = new Tray(logoPath)
});

// IPCMAIN
/*
  Example:
  ipcMain.on('event', (sender,data) => {
    
  })
*/
