import Vue from 'vue'
import VueRouter from 'vue-router'
import state from './components/state';
import App from './App.vue'
import Index from './instance/instance_1/index.vue'
import example_1 from './instance/router/example_1.vue'
import example_2 from './instance/router/example_2.vue'
import example_3 from './instance/router/example_3.vue'
import example_4 from './instance/router/example_4.vue'
import NotFoundPage from './instance/router/not-found-page.vue'
import NamedViews from './instance/router/named-views/named-views.vue'
import example_5 from './instance/router/example_5.vue'
import example_6 from './instance/router/example_6.vue'
import vue_instance_1 from './instance/vuex/instance_1/instance_1.vue'
import vue_instance_2 from './instance/vuex/instance_2/instance_2.vue'
import Login from './instance/router/login.vue'

console.log(state);

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
  {
    name: 'login',
    path: '/login',
    props(route) {
      return {
        redirect: route.query.redirect
      }
    },
    component: Login
  },
  {name: 'example_1', path: '/router/example_1', component: example_1},
  {
    path: '/router/example_2/:id?',
    name: 'example2',
    component: example_2,
    children: [
      {path: '', component: Bar},
      {path: 'profile', component: example_3}, {
        path: 'modify',
        component: example_4
      }]
  },
  {
    path: '/router/example_2/555',
    alias: '/alias'
  },
  {
    path: '/named_views/:id/detail',
    name: 'NamedView',
    component: NamedViews,
  },
  {
    path: '/bbb',
    redirect: {name: 'NamedView', params: {id: '510240'}}
  },
  {
    path: '/router/example_5/:id',
    name: 'ex5',
    props(route) {
      return {
        id: route.params.id,
        query: route.query.q
      }
    },
    component: example_5
  },
  {
    path: '/router/example_6/:id',
    name: 'ex6',
    props(route) {
      return {
        id: route.params.id,
        query: {q: route.query.q, gard: route.query.gard}
      }
    },
    meta: {requiresAuth: true},
    component: example_6
  },
  {
    path: '/vuex/example_1',
    component: vue_instance_1
  },
  {
    path: '/vuex/example_2',
    component: vue_instance_2
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  //mode: 'history',
  mode: 'history',
  routes, // （缩写）相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (state.isLogin) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath},
      });
    }

  } else {
    next();
  }
});

new Vue({
  created() {
    let _this = this;
    state.$on('changeLoginState', function (value) {
      _this.isLoginState = value;
    });
  },
  data() {
    return {
      isLoginState: state.isLogin
    }
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'login'
    },
    isShowHomePageLink() {
      let route_name = this.$route.name;
      return route_name !== 'HomePage' && route_name !== 'NotFound'
    }
  },
  methods: {
    logout() {
      state.isLogin = false;
      state.$emit('changeLoginState',state.isLogin);
      this.$router.replace({
        name: 'HomePage'
      });
    }
  },
  router
}).$mount('#router');
