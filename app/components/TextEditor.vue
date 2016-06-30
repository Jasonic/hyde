<template>
    <div class="text-editor">
        <div id="editor">

        </div>
    </div>
</template>

<script>
  import store from '../store.js'
  import ace from 'brace'
  import 'brace/mode/markdown'
  import 'brace/theme/ocean_dark'
  import 'brace/ext/spellcheck'

  export default {
    ready () {
      var editor = ace.edit('editor')

      editor.getSession().setMode('ace/mode/markdown')
      editor.setTheme('ace/theme/ocean_dark')
      editor.setValue(store.state.input)

      editor.setOptions({
        enableMultiselect: true,
        highlightActiveLine: false,
        spellcheck: true,
        wrap: true,
        showFoldWidgets: false,
        showPrintMargin: false
      })

      editor.getSession().on('change', function (e) {
        var str = editor.getValue()
        store.updateInput(str)
      })
    }
  }
</script>

<style>
  .text-editor {
    background: #233943;
    color: #B1B9BD;
    font-size: 14px;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
  }

  #editor {
    width: 100%;
    height: 100%;
    background: #233943;
    border: none;
    resize: none;
    color: inherit;
    font: inherit;
    outline: none;
    position: absolute;
  }
</style>
