import { app as ElectronApp, BrowserWindow } from 'electron';

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
  mainWindow.webContents.openDevTools();
});

ElectronApp.on('window-all-closed', () => {
  ElectronApp.quit();
});
