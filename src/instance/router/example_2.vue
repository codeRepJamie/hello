<template>
  <div class="page">
    <h1>the params is：{{id}}</h1>
    <ul>
      <li>
        <router-link to="/router/example_2/1000">动态路由参数1000</router-link>
        <router-link to="/router/example_2/2000">动态路由参数2000</router-link>
        <router-link to="/router/example_2/3000">动态路由参数3000</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      id: function () {
        return this.$route.params.id != null ? this.$route.params.id : '1000'
      }
    }
  }
</script>
