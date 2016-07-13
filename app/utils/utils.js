import ace from 'brace'
import store from '../store.js'

const fs = require('fs.promised')
const {dialog, BrowserWindow} = require('electron').remote

export const updateEditor = function (str) {
  var editor = ace.edit('editor')
  editor.setValue(str, -1)
}

export const openFileDialog = function () {
  dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
    properties: ['openFile']
  }, function (file) {
    if (file) openFile(file[0])
  })
}

export const openFile = function (path) {
  fs.readFile(path, 'utf8').then((contents) => {
    // Start watching the file for changes - if there are any then prompt if the user wants to update to the new changes.
    // https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener
    updateEditor(contents)
    store.setContent(contents, {silent: true})
    store.setCurrentFile(path)
    store.setCurrentDirectory(path.split('/').slice(0, -1).join('/'))
  }).catch((err) => {
    dialog.showErrorBox('Unable to open file', err.message)
    store.setCurrentFile('')
  })
}

export const saveFile = function (path, contents) {
  if (!path.length) {
    saveFileDialog(contents)
    return
  }

  // Preemptively assume we saved it.
  if (store.state.fileSaved !== true) {
    store.toggleFileSaved()
  }

  fs.writeFile(path, contents).then(() => {
    console.log('File Saved: ' + path)
  }).catch((err) => {
    // Save failed so set it back.
    dialog.showErrorBox('File Save Error', err.message)
    store.toggleFileSaved()
  })
}

export const saveFileConfirmDialog = function (path, contents) {
  dialog.showMessageBox({
    title: 'Save your changes',
    message: 'Do you wan\'t to save the changes you have made ?',
    buttons: ['Yes', 'No']
  }, function (index) {
    if (index === 0) saveFile(path, contents)
  })
}

export const saveFileDialog = function (contents) {
  dialog.showSaveDialog(BrowserWindow.getFocusedWindow(), {defaultPath: store.state.currentDirectory, extensions: ['.md']}, function (fileName) {
    // No file name if we cancel the dialog
    if (fileName === undefined) return
    // If we don't specify a file extension, assign it as a markdown file
    if (fileName.split('.').length <= 1) fileName += '.md'

    store.setCurrentFile(fileName)
    store.setCurrentDirectory(fileName.split('/').slice(0, -1).join('/'))
    saveFile(fileName, contents)
  })
}
