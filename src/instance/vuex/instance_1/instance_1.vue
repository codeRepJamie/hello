<template>
  <div>
    <vuex_1></vuex_1>
    <vuex_2></vuex_2>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import Vue from 'vue';

  let store = new Vue({
    created() {
      this.name = 'store'
    },
    data() {
      return {
        debug: true,
        state: {
          count: 1
        }
      }
    },
    methods: {
      /*setValueAction(newValue) {
        if (this.debug) {
          console.log('setValueAction triggered with', newValue)
        }
      }*/
    }
  });

  const vuex_1 = {
    created() {
      let _this = this;
      this.name = 'vuex_1';
      store.$on('setValueAction', function (value) {
        console.log('setValueAction triggered with', value);
        console.log(this);
        _this.count = value;
      });
    },
    data() {
      return {
        count: 0
      }
    },
    template: `
    <div>
      <p>vuex_1:{{count}}</p>
    </div>`
  };
  const vuex_2 = {
    created() {
      let _this = this;
      this.name = 'vuex_2';
      store.$on('setValueAction', function (value) {
        console.log('setValueAction triggered with', value);
        console.log(this);
        _this.count = value;
      });
    },
    data() {
      return {
        count: 0
      }
    },
    template: `
    <div>
      <p>vuex_2:{{count}}</p>
    </div>`
  };

  export default {
    created() {
      this.name = 'page'
    },
    components: {
      vuex_1,
      vuex_2,
    },
    methods: {
      add() {
        store.$emit('setValueAction', ++store.state.count);
        console.log(store.state.count);
      }
    }
  }
</script>
