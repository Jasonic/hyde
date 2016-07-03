<template>
  <div class="file-status">
    <div v-if="!state.fileSaved" class="status-indicator--unsaved"></div>
    <div v-if="state.fileSaving" class="status-indicator--saving"></div>
  </div>
</template>

<script>
  import store from '../store.js'

  export default {
    data () {
      return {
        state: store.state
      }
    }
  }
</script>

<style>
  /* Temp styles */
  .status-indicator--unsaved,
  .status-indicator--saving {
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 100%;
  }

  .file-status {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  .status-indicator--unsaved {
    border: 1px solid rgb(35, 57, 67);
  }

  .status-indicator--saving {
    border: 1px solid red;
  }
</style>
