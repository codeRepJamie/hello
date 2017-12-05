import Vue from 'vue';
import currencyValidator from 'currencyValidator';

let Child = {
  props: ['message'],
  template: `
<div data-type="child" class="efg">
  <button @click="setValue">A custom component xxxzzz!{{child}}</button>
  <p>{{child}}</p>
</div>
`,
  data: function () {
    return {child: parseInt(this.message)}
  },
  methods: {
    setValue: function () {
      this.child += 1;
      this.$emit('update:message', this.child);
    }
  }
};

let Currency = {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  },
  mounted: function () {
    this.formatValue();
  },
  template: `
    <p><label v-if="label">{{label}}：&yen;</label><input ref="input" type="text"></p>
  `,
  methods: {
    formatValue: function () {
      this.$refs.input.value = currencyValidator.format(this.value)
    }
  }
};

new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 56,
    c: 3,
    e: 0,
    shoePrice: 10,
  },
  // 选项
  template: `<div>
  <my-component data-type="parent" :message.sync="a" data-3d-date-picker="true" class="abc"></my-component>
  <my-component :message.sync="b"></my-component>
  <my-component :message.sync="c"></my-component>
  
  instance2：
  <currency-input label="Buy Shoe" v-model="shoePrice"></currency-input>
  <p>total:&yen;{{total}}</p>
</div>
`,
  components: {
    'my-component': Child,
    'currency-input': Currency
  },
  computed: {
    total: function () {
      return currencyValidator.format(this.shoePrice);
    }
  }
});
