<template>
  <anchored-head :header="header"></anchored-head>
</template>

<script>
  export default {
    props:['data'],
    data(){
      console.log(this.data);
      return this.data
    }
  }
</script>
