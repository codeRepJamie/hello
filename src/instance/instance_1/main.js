import Vue from 'vue'

let Child = {
  props: ['message'],
  template: `
<div data-type="child" class="efg">
  <button @click="setValue">A custom component!{{child}}</button>
  <p>{{child}}</p>
</div>
`,
  data: function () {
    return {child: parseInt(this.message)}
  },
  methods: {
    setValue: function () {
      this.child += 1;
    }
  }
};

new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 56,
    c: 3,
  },
  // 选项
  template: `<div>
  <my-component data-type="parent" :message="a" data-3d-date-picker="true" class="abc"></my-component>
  <my-component :message="b"></my-component>
  <my-component :message="c"></my-component>
  total:{{a+b+c}}
</div>
`,
  components: {
    'my-component': Child
  }
});
