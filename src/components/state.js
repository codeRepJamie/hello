import Vue from 'Vue';

const state = new Vue({
  created() {
    this.$on('changeLoginState', function (value) {
      localStorage.setItem('isLogin', value);
    });
  },
  data: {
    isLogin: localStorage.getItem('isLogin') != null ? localStorage.getItem('isLogin') === 'true' : false
  }
});

export default state;
