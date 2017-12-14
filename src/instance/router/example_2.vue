<template>
  <div class="example2">
    <h1>the params is：{{id}}</h1>
    <ul>
      <li class="list">
        <router-link to="/router/example_2/1000">动态路由参数1000</router-link>
      </li>
      <li class="list">
        <router-link to="/router/example_2/2000">动态路由参数2000</router-link>
      </li>
      <li class="list">
        <router-link to="/router/example_2/3000">动态路由参数3000</router-link>
      </li>
      <li class="list">
        <router-link to="/router/example_2/3000/profile">动态路由参数4000(嵌套路由)</router-link>
      </li>
      <li class="list">
        <router-link to="/router/example_2/3000/modify">动态路由参数5000(嵌套路由)</router-link>
      </li>
      <li class="list">
        <button @click="routerPush('ex1')">编程式的导航1</button>
      </li>
      <li class="list">
        <button @click="routerPush('ex2')">router.replace</button>
      </li>
      <li class="list">
        <button @click="routerPush('ex3')">history.back()</button>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
  export default {
    beforeRouteUpdate(to, _from, next) {
      next();
    },
    data() {
      return {
        ex2Id: '1999'
      }
    },
    computed: {
      id() {
        console.log(this.$route.params.id);
        return this.$route.params.id != null ? this.$route.params.id : '1000'
      }
    },
    methods: {
      routerPush(type) {
        let _this = this;
        switch (type) {
          case 'ex1':
            this.$router.push({name: 'example2', params: {id: 123}, query: {plan: 'private'}});
            break;
          case 'ex2':
            const ex2Id = this.ex2Id;
            this.$router.replace({path: '/router/example_2/replace'}, function ($route) {
            });
            break;
          case 'ex3':
            this.$router.go(-1);
            break;
        }

      }
    }
  }
</script>

<style lang="less">
  .example2 {
    .list {
      display: block;
    }
  }
</style>
