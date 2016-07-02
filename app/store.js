const ElectronSettings = require('electron-settings')

let settings = new ElectronSettings()

let config = settings.get()

if (Object.keys(config).length === 0) {
  settings.set('currentFile', '/Users/hparton/Desktop/howdy.md')
  settings.set('currentDirectory', '/Users/hparton/Desktop')
}

var store = {
  state: {
    content: '',
    currentFile: settings.get('currentFile'),
    currentDirectory: settings.get('currentDirectory'),
    fileExplorerOpen: false,
    fileSaved: true,
    fileSaving: false
  },
  // TODO:
  // Need an updateContent and setContent function,
  // setContent bypasses the toggleFileSaved. Or just
  // add a parameter ?
  setContent: function (str, options = {silent: false}) {
    this.state.content = str

    if (this.state.fileSaved === true && options.silent === false) {
      this.toggleFileSaved()
    }
  },
  setCurrentFile: function (path) {
    this.state.currentFile = path
    settings.set('currentFile', path)
  },
  setCurrentDirectory: function (path) {
    this.state.currentDirectory = path
    settings.set('currentDirectory', path)
  },
  toggleFileExplorer: function () {
    this.state.fileExplorerOpen = !this.state.fileExplorerOpen
  },
  toggleFileSaved: function () {
    this.state.fileSaved = !this.state.fileSaved
  },
  toggleFileSaving: function () {
    this.state.fileSaving = !this.state.fileSaving
  }
}

export default store
