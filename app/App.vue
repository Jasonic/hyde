<template>
  <div class="flex-extend">
    <div v-bind:class="{ 'file-explorer-active': state.fileExplorerOpen }" class="page-wrap" id="file-drop">
      <div class="text-editor">
        <text-editor></text-editor>
        <current-file></current-file>
      </div>
      <preview-pane></preview-pane>
      <save-status></save-status>
    </div>
  </div>
</template>

<script>
  import store from './store.js'

  import {openFile} from './utils/utils.js'

  import TextEditor from './components/TextEditor'
  import PreviewPane from './components/Preview'
  import CurrentFile from './components/CurrentFile'
  import SaveStatus from './components/SaveStatus'

  export default {
    data () {
      return {
        state: store.state
      }
    },
    ready () {
      if (this.state.currentFile !== '') {
        openFile(this.state.currentFile)
      }

      var handler = document.getElementById('file-drop')

      handler.ondrop = function (e) {
        e.preventDefault()
        var file = e.dataTransfer.files[0]
        openFile(file.path)
        return false
      }
    },
    components: {
      TextEditor,
      PreviewPane,
      CurrentFile,
      SaveStatus
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
  .page-wrap,
  .flex-extend {
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
