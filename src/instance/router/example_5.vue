<template>
  <div class="router-5">
    <h1>example-5</h1>
    <p>the props id:{{id}}query:{{query}}</p>
  </div>
</template>

<script>
  export default {
    props:['id','query'],
    mounted(){
      console.log(this.id);
    }
  }
</script>
