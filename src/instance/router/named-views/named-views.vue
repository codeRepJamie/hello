<template>
  <div class="page-named-views">
    <h1>named-views</h1>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    <router-link :to="{path:isDetail ? 'haha':'detail'}">{{isDetail ? 'haha' : 'detail'}}</router-link>
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
    {
      path: '/named_views/:id/haha',
      components: {
        default: NamedViewsChild3,
        a: NamedViewsChild1,
        b: NamedViewsChild2
      }
    }
  ];

  export default {
    computed: {
      isDetail() {
        return /detail$/.exec(this.$route.path)
      }
    },
    router: new VueRouter({routes})
  }
</script>
