<template>
  <div>
    <vuex_1></vuex_1>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  });

  const vuex_1 = {
    computed: {
      count() {
        return store.state.count
      }
    },
    template: `
    <div><p>vuex_1: {{count}}</p></div>
    `
  };

  const Page = {
    methods: {
      add() {
        store.commit('increment');
        console.log(store.state.count); // -> 1
      }
    },
    components: {
      vuex_1
    }
  };

  export default Page;
</script>
