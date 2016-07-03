<!-- TODO - REMOVE THIS AND REUSE BITS FOR A SETTINGS PAGE -->

<template>
    <div>
        <div class="file-explorer-wrapper"transition='overlay' @click.prevent="toggleSidebar"></div>
        <div class="file-explorer" transition='sidebar'>
          <p class="menu-title">Files</p>
        </div>
    </div>
</template>

<script>
    import store from '../store.js'

    export default {
      data () {
        return {
          state: store.state,
          files: []
        }
      },
      filters: {
        removePath (val) {
          return val.split('/').slice(-1)[0]
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
