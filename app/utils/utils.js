import ace from 'brace'
const fs = require('fs.promised')

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
  })
}

export const saveFile = function (path, contents, store) {
  // TODO: Start an animation here ?
  // Saving spinner ?

  // Preemptivley assume we saved it.
  store.toggleFileSaved()

  // TODO: setTimeout after 2 seconds if the file hasn't saved yet show the icon.
  //       This needs a way to cancel it if the file saves in under 2 seconds.
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
