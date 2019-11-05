import { app as ElectronApp, BrowserWindow } from 'electron';
require('electron-reload')(__dirname);

let mainWindow: Electron.BrowserWindow;

ElectronApp.on('ready', () => {

  mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 600,
      resizable: false
    }
  );

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ElectronApp.on('window-all-closed', () => {
  ElectronApp.quit();
});
