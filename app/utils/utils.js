import ace from 'brace'

export const updateEditor = function (str) {
  // Temp workaround to keep the editor in sync, this might recursive ?
  var editor = ace.edit('editor')
  editor.setValue(str)
}
