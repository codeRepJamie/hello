import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './instance/instance_1/index.vue'
import example_1 from './instance/router/example_1.vue'
import example_2 from './instance/router/example_2.vue'

Vue.use(VueRouter);

// 1. 定义（路由）组件。
//const Page = {template: '<div class="page"><router-view></router-view></div>'};
const Bar = {template: '<div>bar</div>'};
const Foo = {template: '<div>foo</div>'};

// 2. 定义路由
const routes = [
  {path: '/', component: App},
  {path: '/index', component: Index},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '/router/example_1', component: example_1},
  {path: '/router/example_2/:id?', component: example_2},
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

new Vue({
  router
}).$mount('#router');
