<template>
  <div class="current-file">
      <svg class="current-file__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path fill="#57686F" d="M85,33l-34.1,0l-9.5-9.4C41,23.2,40.5,23,40,23H15c-1.1,0-2,0.9-2,2v50c0,1.1,0.9,2,2,2h70c1.1,0,2-0.9,2-2  V35C87,33.9,86.1,33,85,33z M83,73H17V27h22.2l9.5,9.4c0.4,0.4,0.9,0.6,1.4,0.6L83,37V73z"/>
      </svg>
      <a v-if="state.currentFile" class="current-file__link" href="#" @click.prevent="toggleSidebar">{{state.currentFile | parentPath}}</a>
  </div>
</template>

<script>
    import store from '../store.js'

    export default {
      data () {
        return {
          state: store.state
        }
      },
      filters: {
        parentPath (value) {
          let path = value.split('/').slice(3)
          return path.join('/')
        }
      },
      methods: {
        toggleSidebar () {
          store.toggleFileExplorer()
        }
      }
    }
</script>

<style>
  .current-file {
    position: absolute;
    z-index: 2;
    bottom: 10px;
    left: 15px;
  }

  .current-file__icon,
  .current-file__link {
    vertical-align: middle;
  }

  .current-file__icon {
    width: 25px;
    display: inline-block;
  }

  .current-file__link {
    color: #57686F;
    text-decoration: none;
    font-size: 12px;
  }
</style>
