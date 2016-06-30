<template>
    <div>
        <div class="file-explorer-wrapper" v-if="state.fileExplorerOpen" @click.prevent="toggleSidebar"></div>
        <div class="file-explorer" v-show="state.fileExplorerOpen">
          <ul v-if="files" class="file-explorer__files">
            <li class="file-explorer__file" v-for="file in files">
              <a href="#" @click.prevent="loadFile(file)">{{file}}</a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store.js'
    import glob from 'glob'
    import fs from 'fs'
    import { updateEditor } from '../utils/utils.js'

    export default {
      ready () {
        this.getDirectoryFiles()
      },
      data () {
        return {
          state: store.state,
          files: []
        }
      },
      methods: {
        toggleSidebar () {
          store.toggleFileExplorer()
        },
        getDirectoryFiles () {
          var self = this

          glob(self.state.currentDirectory + '/*.md', function (er, files) {
            // files is an array of filenames.
            // If the `nonull` option is set, and nothing
            // was found, then files is ["**/*.js"]
            // er is an error object or null.
            console.log(files)
            self.files = files
          })
        },
        loadFile (file) {
          var str = fs.readFileSync(file, 'utf8')
          store.setCurrentFile(file)
          store.toggleFileExplorer()
          updateEditor(str)
        }
      },
      watch: {
        'state.currentDirectory': function (val, oldVal) {
          this.getDirectoryFiles(val)
        }
      }
    }
</script>

<style>
  .file-explorer-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0,0,0,0.4);
  }

  .file-explorer {
    font-family: 'Open Sans';
    position: fixed;
    width: 30%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    padding: 45px 15px;
    background: rgb(255, 255, 255);
  }

  .file-explorer__file a {
    word-break: break-all;
  }

</style>
