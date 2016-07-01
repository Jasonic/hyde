var store = {
  state: {
    content: '',
    currentFile: '/Users/hparton/Desktop/howdy.md',
    currentDirectory: '/Users/hparton/Desktop',
    fileExplorerOpen: false,
    fileSaved: true,
    fileSaving: false
  },
  // TODO:
  // Need an updateContent and setContent function,
  // setContent bypasses the toggleFileSaved. Or just
  // add a parameter ?
  setContent: function (str) {
    this.state.content = str

    if (this.state.fileSaved === true) {
      this.toggleFileSaved()
    }
  },
  setCurrentFile: function (path) {
    this.state.currentFile = path
  },
  setCurrentDirectory: function (path) {
    this.state.currentDirectory = path
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
