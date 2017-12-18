<template>
  <div class="login">
    <h1>login</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import state from '../../components/state';

  console.log(state);

  export default {
    props: ['redirect'],
    methods: {
      login() {
        state.$emit('changeLoginState',state.isLogin = true);
        this.$router.replace({
          path: this.redirect
        });
      }
    }
  }
</script>
