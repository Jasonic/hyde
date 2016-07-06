<template>
  <div id="editor">

  </div>
</template>

<script>
  import store from '../store.js'
  import { saveFile, saveFileDialog } from '../utils/utils.js'
  import ace from 'brace'
  import 'brace/mode/markdown'
  import 'spacegray-ace-theme'
  import 'brace/ext/spellcheck'

  export default {
    ready () {
      var editor = ace.edit('editor')

      editor.getSession().setMode('ace/mode/markdown')
      editor.setTheme('ace/theme/space_gray')
      editor.setValue(store.state.content)

      editor.commands.addCommand({
        name: 'save file',
        bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
        exec: function (editor) {
          saveFile(store.state.currentFile, editor.getValue())
        }
      })

      editor.commands.addCommand({
        name: 'save file as',
        bindKey: {win: 'Ctrl-Alt-S', mac: 'Command-Alt-S'},
        exec: function (editor) {
          saveFileDialog(editor.getValue())
        }
      })

      editor.setOptions({
        enableMultiselect: true,
        highlightActiveLine: false,
        spellcheck: true,
        wrap: true,
        showFoldWidgets: false,
        showPrintMargin: false
      })

      editor.getSession().on('change', function (e) {
        let silent = false
        let str = editor.getValue()

        // Programmatically updating editor content, no need to notify of the change and show unsaved icon.
        if (!(editor.curOp && editor.curOp.command.name)) silent = true

        store.setContent(str, { silent: silent })
      })
    }
  }
</script>

<style>
  .text-editor {
    background: #233943;
    color: #B1B9BD;
    font-size: 14px;
    padding-right: 15px;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
  }

  #editor {
    width: 100%;
    height: 100%;
    background: #233943;
    padding-bottom: 45px;
  }
</style>
