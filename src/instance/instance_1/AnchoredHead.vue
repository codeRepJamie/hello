<template>
  <div id="app" class="anchored-head">
    <h1>{{ msg }}</h1>
    <slot></slot>
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

<style lang="less">
  .anchored-head {
    .h1 {
      font-size: 16px;
    }
    p{
      color: #333;
    }
  }
</style>
