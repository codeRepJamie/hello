import Vue from 'vue';
import currencyValidator from 'currencyValidator';
import {Input,Avatar} from 'iview';
import 'iviewCss';

//Vue.use(iView);

let Child = {
  props: ['message'],
  template: `
<div data-type="child" class="efg">
  <button @click="setValue">A custom component xxxzz123!{{child}}</button>
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
  data: function () {
    return {isDisplay: true}
  },
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
    <p>
      <label v-if="label">{{label}}：&yen;</label>
      <input 
        ref="input" 
        type="text" 
        @focus="selectAll"
        @input="updateValue($event.target.value)"
        v-show="isDisplay"
        >
        <slot name="header">header只有在没有内容时显示。</slot>
        <slot name="footer">footer只有在没有内容时显示。</slot>
        <slot :props="label"></slot>
        <input type="text">
    </p>
  `,
  methods: {
    updateValue: function (value) {
      let result = currencyValidator.parse(value, this.value);
      if (result.warning) {
        this.$refs.input.value = currencyValidator.format(result.value)
      }
      this.$emit('input', result.value);
      this.$emit('input-update', result.value);
    },
    formatValue: function () {
      this.$refs.input.value = currencyValidator.format(this.value)
    },
    selectAll: function (event) {
      setTimeout(function () {
        event.target.select();
      }, 0)
    }
  }
};

let AsyncExample = function (resolve, reject) {
  setTimeout(function () {
    // 将组件定义传入 resolve 回调函数
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
};


new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 56,
    c: 3,
    e: 0,
    shoePrice: 10,
    currentView: 'currencyInput'
  },
  // 选项
  template: `<div>
  <my-component data-type="parent" :message.sync="a" data-3d-date-picker="true" class="abc"></my-component>
  <my-component :message.sync="b"></my-component>
  <my-component :message.sync="c"></my-component>
  
  instance2：
  <currency-input label="Buy Shoe" v-model="shoePrice">
    <p slot="header">head hhhh</p>
    <p slot="footer">foot ffff</p>
    <div class="abc" slot-scope="{props}">
      <span>hello from parent</span>|
      <span>{{ props }}</span>
    </div>
  </currency-input>
  <p>total:&yen;{{total}}</p>
  <keep-alive><component :is="currentView" label="A" v-model="shoePrice"></component></keep-alive>
  <button @click="change">改变模板</button>
  
  <async-example></async-example>
  <i-avatar icon="person" src=""></i-avatar>
</div>
`,
  components: {
    'myComponent': Child,
    'currencyInput': Currency,
    'asyncExample': AsyncExample,
    'i-avatar': Avatar,
  },
  computed: {
    total: function () {
      return currencyValidator.format(this.shoePrice);
    }
  },
  methods: {
    change: function () {
      this.currentView = this.currentView === 'myComponent' ? 'currencyInput' : 'myComponent';
    }
  }
});
