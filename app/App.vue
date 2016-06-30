<template>
    <div class="page-wrap" id="file-drop">
      <div class="text-editor">
        <text-editor></text-editor>
        <current-file></current-file>
      </div>
      <preview-pane></preview-pane>
      <file-explorer></file-explorer>
    </div>
</template>

<script>
  import store from './store.js'

  import TextEditor from './components/TextEditor'
  import PreviewPane from './components/Preview'
  import FileExplorer from './components/FileExplorer'
  import CurrentFile from './components/CurrentFile'

  import fs from 'fs'

  export default {
    data () {
      return {
        state: store.state
      }
    },
    ready () {
      console.log('SETUP')
      var handler = document.getElementById('file-drop')

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
        console.log(file)

        // This is just an example - make a note of the current file in the store.
        // then when we save use that file path to update the file and what not.
        // For now just set the contents
        var str = fs.readFileSync(file.path, 'utf8')
        store.setCurrentFile(file.path)
        store.setCurrentDirectory(file.path.split('/').slice(0, -1).join('/'))
        store.setContent(str)
        return false
      }
    },
    components: {
      TextEditor,
      PreviewPane,
      FileExplorer,
      CurrentFile
    }
  }
</script>

<style>

/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
*, *:after, *:before {
    box-sizing: border-box;
}


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
    padding-top: 45px;
    padding-bottom: 45px;
    width: 50%;
    height: 100%;
    overflow: auto;
    position: relative;
  }


</style>
