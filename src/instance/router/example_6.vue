<template>
  <div class="router-6">
    <h1>example-6</h1>
    <p>the props id:{{id}} query:{{query}}</p>
    <button @click="changeParams">changeParams(gard:{{query.gard}})</button>
  </div>
</template>

<script>

  export default {
    props: ['id', 'query'],
    methods: {
      changeParams() {
        let _this = this;
        this.$router.push({
          name: 'ex6',
          params: {id: _this.id},
          query: {q: _this.query.q, gard: ++_this.query.gard}
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log('beforeRouteEnter');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('beforeRouteUpdate');
      console.log(to.query.gard);
      next();
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('beforeRouteLeave');
      //console.log(from.query);
      next();
    }
  };
</script>
