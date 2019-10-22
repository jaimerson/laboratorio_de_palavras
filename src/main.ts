import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../index.html'));

    mainWindow.on('closed', () => {
        Object.assign(mainWindow, null);
    });
}

app.on('ready', createWindow);


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
