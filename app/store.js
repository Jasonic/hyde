const Configstore = require('configstore')
const pkg = require('./package.json')
const os = require('os')

let settings = new Configstore(pkg.name, {
  currentFile: '',
  currentDirectory: os.homedir()
})

var store = {
  state: {
    content: '',
    currentFile: settings.get('currentFile'),
    currentDirectory: settings.get('currentDirectory'),
    fileExplorerOpen: false,
    fileSaved: true
  },
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
  }
}

export default store
