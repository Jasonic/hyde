var store = {
  state: {
    input: '# Hello!'
  },
  actionA: function () {
    this.state.input = 'action A triggered'
  },
  actionB: function () {
    this.state.input = 'action B triggered'
  },
  updateInput: function (str) {
    console.log('triggered')
    this.state.input = str
  }
}

export default store
