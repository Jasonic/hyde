<template>
    <div class="page-wrap">
        <div class="text-editor"></div>
        <div class="rendered"></div>
    </div>
</template>

<style>
    .page-wrap {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .text-editor,
    .rendered {

    }
</style>

<script>
  import { remote } from 'electron'
  import os from 'os'

  export default {
    data () {
      return {
        platform: os.platform(),
        appName: remote.app.getName(),
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
