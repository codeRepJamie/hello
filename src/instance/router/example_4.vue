<template>
  <div class="page">
    <h1>{{route}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      console.log(this.$route);
      return {
        route: '123'
      }
    }
  }
</script>
