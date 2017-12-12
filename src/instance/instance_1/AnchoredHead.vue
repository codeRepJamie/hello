<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['header'],
    data() {
      return {msg: this.header}
    }
  }
</script>

<style>
  #app .h1 {
    font-size: 16px;
  }
</style>
