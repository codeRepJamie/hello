import Vue from 'vue';
import currencyValidator from 'currencyValidator';
import {Input, Avatar} from 'iview';
import Velocity from 'Velocityjs';
import 'iviewCss';
import './style.less';

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


/*window.vm = new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 56,
    c: 3,
    e: 0,
    shoePrice: 10,
    currentView: 'currencyInput',
    show: false,
    items: [{
      text: 123
    }, {
      text: 456
    }],
    isEditing: true,
    isOn: true
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
  <div>
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show">
      Demo
    </p>
  </transition>
    <button v-on:click="show = !show">
      Toggle
    </button>

    <transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class"

  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
>
  <p>apper</p>
</transition>

    <!--多个元素的过渡-->
    <transition>
      <table v-if="items.length > 0">
        <tr v-for="item in items">
          <td>{{item.text}}</td>
        </tr>
      </table>
      <p v-else>Sorry, no items found.</p>
    </transition>

  </div>

  <transition>
     <button v-bind:key="isEditing" @click="isEditing = !isEditing">
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
  </transition>

  <transition
    @after-enter="afterEnter"
    mode="in-out"
  >
    <button
      class="btnTrans"
      :key="isOn"
      @click="isOn = !isOn"
      >
      {{ isOn ? 'on': 'off' }}
    </button>
</transition>

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
    },
    /!** 动画 **!/
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300});
      Velocity(el, {fontSize: '1em'}, {complete: done});
    },
    leave: function (el, done) {
      Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600});
      Velocity(el, {rotateZ: '100deg'}, {loop: 2});
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, {complete: done});
    },
    afterEnter: function (el) {
    },
    customBeforeAppearHook: function (el) {
      console.log('customBeforeAppearHook');
    },
    customAppearHook: function (el, done) {
      console.log('customAppearHook');
      done();
    },
    customAfterAppearHook: function (el) {
      console.log('customAfterAppearHook');
    }
  }
});*/


//list-demo
/*new Vue({
  el: '#list-demo',
  template: `<div>
  <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
  <!--<transition-group
   @enter="activeEvent"
   @leave="activeEvent"
   @afterEnter="afterEvent"
   @afterLeave="afterEvent"
   name="list-complete" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-complete-item">
      {{ item }}
    </span>
  </transition-group>-->
  <transition-group

   name="list-complete" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-complete-item">
      {{ item }}
    </span>
  </transition-group>
  </div>
  `,
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isAnimateActive: false,
    nextNum: 10
  },
  methods: {
    activeEvent: function (el, done) {
      this.isAnimateActive = true;
      //done();
      el.addEventListener('transitionend',done,false);
    },
    afterEvent: function () {
      this.isAnimateActive = false;
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      if (!this.isAnimateActive) {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      }
    },
    remove: function () {
      if (!this.isAnimateActive) {
        this.items.splice(this.randomIndex(), 1)
      }
    },
  }
});*/
//flip
/*new Vue({
  el: '#flip-list-demo',
  template: `
<div class="demo">
  <button v-on:click="shuffle">Shuffle</button>
  <transition-group name="flip-list" tag="ul">
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
  </transition-group>
</div>`,
  data: {
    items: [1,2,3,4,5,6,7,8,9]
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
});*/
//staggered-list
var StaggeredList = {
  props:['list'],
  template: `
    <div>
      <input v-model="query">
      <transition-group
        name="list-complete"
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li v-for="(item, index) in computedList"
          v-bind:key="index"
          v-bind:data-index="index">
          <slot :item="item"></slot>
        </li>
        
      </transition-group>
    </div>
  `,
  data: function () {
    return {
      query: ''
    }
  },
  computed: {
    computedList: function () {
      var vm = this;
      console.log(vm);
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      })
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 1000;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 1, height: '1.6em'},
          {complete: done, duration: 2000}
        )
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 1000;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 0, height: 0},
          {complete: done, duration: 2000}
        )
      }, delay)
    }
  }
};

new Vue({
  el: '#staggered-list-demo',
  data:{
    list: [
      {msg: 'Bruce Lee'},
      {msg: 'Jackie Chan'},
      {msg: 'Chuck Norris'},
      {msg: 'Jet Li'},
      {msg: 'AAs'},
      {msg: 'Kung Fury'}
    ]
  },
  template: `
  <staggered-list :list="list">
      <template slot-scope="props">
        <span>{{props.item.msg}}</span>
      </template>
  </staggered-list>
  `,
  components: {
    StaggeredList: StaggeredList
  }
});
