<template>
  <div id="app" class="breadcrumb">
    <h1>breadcrumb</h1>
    <slot>没有东西</slot>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['header'],
    data() {
      console.log('xxxAxx123');
      return {msg: this.header}
    }
  }
</script>

<style lang="less">
  .breadcrumb {
    .h1 {
      font-size: 16px;
    }
    p{
      color: #333;
    }
  }
</style>
