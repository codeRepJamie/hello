import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './instance/instance_1/index.vue'
import example_1 from './instance/router/example_1.vue'
import example_2 from './instance/router/example_2.vue'
import example_3 from './instance/router/example_3.vue'
import example_4 from './instance/router/example_4.vue'
import NotFoundPage from './instance/router/not-found-page.vue'
import NamedViews from './instance/router/named-views/named-views.vue'


Vue.use(VueRouter);

// 1. 定义（路由）组件。
//const Page = {template: '<div class="page"><router-view></router-view></div>'};
const Bar = {template: '<div>bar</div>'};
const Foo = {template: '<div>foo</div>'};

// 2. 定义路由
const routes = [
  {name: 'NotFound', path: '*', component: NotFoundPage},
  {name: 'HomePage', path: '/', component: App},
  {path: '/index', component: Index},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '/router/example_1', component: example_1},
  {
    name: 'example2',
    path: '/router/example_2/:id?',
    component: example_2,
    children: [
      {path: '', component: Bar},
      {path: 'profile', component: example_3}, {
        path: 'modify',
        component: example_4
      }]
  },
  {
    name: 'NamedView', path: '/named_views/:id/detail', component: NamedViews,
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  //mode: 'history',
  routes // （缩写）相当于 routes: routes
});

new Vue({
  computed: {
    isShowHomePageLink() {
      let route_name = this.$route.name;
      return route_name !== 'HomePage' && route_name !== 'NotFound'
    }
  },
  router
}).$mount('#router');
