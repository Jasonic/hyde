import ace from 'brace'
const fs = require('fs.promised')

export const updateEditor = function (str) {
  // Temp workaround to keep the editor in sync, this might recursive ?
  var editor = ace.edit('editor')
  editor.setValue(str)
}

export const openFile = function (file, store) {
  // TODO: Start an animation here ?

  fs.readFile(file.path, 'utf8').then((contents) => {
    // TODO: Stop the animation here.
    store.setContent(contents)
    store.setCurrentFile(file.path)
    store.setCurrentDirectory(file.path.split('/').slice(0, -1).join('/'))
  })
}

export const saveFile = function (path, contents, store) {
  // TODO: Start an animation here ?
  // Saving spinner ?
  //
  // Preemptivley assume we saved it.
  store.toggleFileSaved()
  store.toggleFileSaving()

  fs.writeFile(path, contents).then(() => {
    store.toggleFileSaving()
    // TODO: Stop the animation here.
    console.log('wrote!')
  }).catch(() => {
    // Save failed so set it back.
    store.toggleFileSaved()
  })
}
