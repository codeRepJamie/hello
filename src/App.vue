<template>
  <div class="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="text">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Instance</h2>
    <ul>
      <li><a href="./instance_index.html" target="_blank">instance_1</a></li>
    </ul>
    <h2>Router</h2>
    <ul>
      <li>
        <router-link to="/router/example_1">example_1</router-link>
      </li>
      <li>
        <router-link to="/router/example_2">动态路由匹配</router-link>
      </li>
      <li>
        <router-link :to="{name:'NamedView'}">命名视图</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome Jamie to Your Vue.js App'
      }
    }
  }
</script>

<style lang="less">
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
  }


</style>
