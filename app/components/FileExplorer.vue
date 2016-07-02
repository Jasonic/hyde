<template>
    <div>
        <div class="file-explorer-wrapper" v-if="state.fileExplorerOpen" transition='overlay' @click.prevent="toggleSidebar"></div>
        <div class="file-explorer" v-show="state.fileExplorerOpen" transition='sidebar'>
          <p class="menu-title">Files</p>
          <ul v-if="files" class="file-explorer__files">
            <li class="file-explorer__file" v-for="file in files">
              <a href="#" @click.prevent="loadFile(file)">{{ file | removePath }}</a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store.js'
    import glob from 'glob'
    import { openFile } from '../utils/utils.js'

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
          this.toggleSidebar()
          openFile(file, store)
        }
      },
      filters: {
        removePath (val) {
          return val.split('/').slice(-1)[0]
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
  .page-wrap {
    transition: transform .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }

  .file-explorer-active {
    transform: translateX(100px);
  }

  /* always present */
  .sidebar-transition {
    transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    transform: translateX(0);
    overflow: hidden;
  }

  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .sidebar-enter, .sidebar-leave {
    transform: translateX(-340px);
  }

  /* always present */
  .overlay-transition {
    transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    opacity: 1;
  }

  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .overlay-enter, .overlay-leave {
    opacity: 0;
  }

  .file-explorer-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
  }

  .file-explorer {
    font-family: 'Open Sans';
    position: fixed;
    width: 340px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    padding: 45px 15px;
    background: rgb(255, 255, 255);
  }

  .file-explorer__files {
    margin-bottom: 40px;
    color: #222228;
  }

  .file-explorer__file {
    margin-bottom: 10px;
  }

  .file-explorer__file a {
    word-break: break-all;
    color: #44444a;
    text-decoration: none;
  }

  .menu-title {
    margin-bottom: 20px;
    color: #99999a;
    line-height: 30px;
  }

</style>
