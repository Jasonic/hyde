import ace from 'brace'
const fs = require('fs.promised')
const {dialog} = require('electron').remote

export const updateEditor = function (str) {
  // Temp workaround to keep the editor in sync, this might recursive ?
  var editor = ace.edit('editor')
  editor.setValue(str, -1)
}

export const openFile = function (path, store) {
  // TODO: Start an animation here ?

  fs.readFile(path, 'utf8').then((contents) => {
    // TODO: Stop the animation here.
    updateEditor(contents)
    store.setContent(contents, {silent: true})
    store.setCurrentFile(path)
    store.setCurrentDirectory(path.split('/').slice(0, -1).join('/'))
  }).catch((err) => {
    dialog.showErrorBox('Unable to open file', err.message)
    store.setCurrentFile('')
  })
}

export const saveFile = function (path, contents, store) {
  if (!path.length) {
    saveFileAs(contents, store)
    return
  }

  // Preemptivley assume we saved it.
  store.toggleFileSaved()

  fs.writeFile(path, contents).then(() => {
    console.log('File Saved: ' + path)
  }).catch((err) => {
    // Save failed so set it back.
    dialog.showErrorBox('File Save Error', err.message)
    store.toggleFileSaved()
  })
}

export const saveFileAs = function (contents, store) {
  dialog.showSaveDialog({defaultPath: store.state.currentDirectory, extensions: ['.md']}, function (fileName) {
    // No file name if we cancel the dialog
    if (fileName === undefined) return
    // If we don't specify a file extension, assign it as a markdown file
    if (fileName.split('.').length <= 1) fileName += '.md'
    // if (fileName.split('.').pop().length)
    store.setCurrentFile(fileName)
    store.setCurrentDirectory(fileName.split('/').slice(0, -1).join('/'))
    saveFile(fileName, contents, store)
  })
}
