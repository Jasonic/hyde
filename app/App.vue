<template>
    <div class="page-wrap">
        <text-editor></text-editor>
        <preview-pane></preview-pane>
    </div>
</template>

<script>
  import TextEditor from './components/TextEditor'
  import PreviewPane from './components/Preview'
  import fs from 'fs'

  export default {
    ready () {
      console.log('SETUP')
      var handler = document.getElementById('editor')

      handler.ondragover = function () {
        console.log('DRAGGING')
        return false
      }

      handler.ondragleave = handler.ondragend = function () {
        console.log('NOT DRAGGING')
        return false
      }

      handler.ondrop = function (e) {
        console.log('DROPPING')
        e.preventDefault()
        var file = e.dataTransfer.files[0]
        console.log('File you dragged here is', file.path)

        // This is just an example - make a note of the current file in the store.
        // then when we save use that file path to update the file and what not.
        // For now just set the contents
        var str = fs.readFileSync(file.path, 'utf8')
        console.log(str)
        return false
      }
    },
    components: {
      TextEditor,
      PreviewPane
    }
  }
</script>

<style>

  html {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  body,
  .page-wrap {
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .text-editor,
  .rendered {
    padding-top: 5rem;
    width: 50%;
    height: 100%;
    overflow: auto;
    position: relative;
  }
</style>
