<template>
  <div class="page-named-views">
    <h1>named-views</h1>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  import NamedViewsChild1 from './named-views-child-1.vue'
  import NamedViewsChild2 from './named-views-child-2.vue'
  import NamedViewsChild3 from './named-views-child-3.vue'

  const routes = [
    {
      path: '/named_views/:id/detail',
      components: {
        default: NamedViewsChild1,
        a: NamedViewsChild2,
        b: NamedViewsChild3
      }
    },
  ];

  export default {
    router: new VueRouter({routes})
  }
</script>
