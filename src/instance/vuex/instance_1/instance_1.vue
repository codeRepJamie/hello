<template>
  <div>
    <vuex_1></vuex_1>
    <vuex_2></vuex_2>
    <!--<button @click="add"></button>-->
  </div>
</template>

<script>
  let store = {
    state: {
      count: 1
    }
  };

  const vuex_1 = {
    data() {
      return {
        count: store.state.count
      }
    },
    template: `<p>vuex_1:{{count}}</p>`
  };
  const vuex_2 = {
    data() {
      return {
        count: store.state.count
      }
    },
    template: `<p>vuex_2:{{count}}</p>`
  };

  export default {
    components: {
      vuex_1,
      vuex_2,
    },
    methods:{
      add(){
        store.state.count++;
      }
    }
  }
</script>
