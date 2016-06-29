<template>
    <div class="page-wrap">
        <div class="text-editor"></div>
        <div class="rendered"></div>
    </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    components: {
      Hello
    }
  }
</script>

<style>
  html {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body, .page-wrap {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .text-editor,
  .rendered {
    width: 50%;
    height: 100%;
  }

  .text-editor {
    background: #233943;
  }

  #app {
    margin-top: -100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
