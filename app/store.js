
var store = {
  state: {
    content: '# Hello!',
    currentFile: '/Users/hparton/Desktop/howdy.md',
    currentDirectory: '/Users/hparton/Desktop',
    fileExplorerOpen: false
  },
  setContent: function (str) {
    this.state.content = str
  },
  setCurrentFile: function (path) {
    this.state.currentFile = path
  },
  setCurrentDirectory: function (path) {
    this.state.currentDirectory = path
  },
  toggleFileExplorer: function () {
    this.state.fileExplorerOpen = !this.state.fileExplorerOpen
  }
}

export default store
