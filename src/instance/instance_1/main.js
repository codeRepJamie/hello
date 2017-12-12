import Vue from 'vue';
import currencyValidator from 'currencyValidator';
import {Input, Avatar} from 'iview';
import Velocity from 'Velocityjs';
import 'iviewCss';
import './style.less';

//Vue.use(iView);

/*
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
*/

/*
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
*/

/*let AsyncExample = function (resolve, reject) {
  setTimeout(function () {
    // 将组件定义传入 resolve 回调函数
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
};*/


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
/*
var StaggeredList = {
  props:['list'],
  template: `
    <div>
      <input v-model="query">
      <transition-group
        name="list-complete"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <!--<li v-for="(item, index) in computedList"
          v-bind:key="index"
          v-bind:data-index="index"
          >
          <slot :item="item"></slot>
        </li>-->
        <div v-for="(item, index) in computedList" v-bind:key="index" v-bind:data-index="index">
          <slot :item="item" ></slot>
        </div>

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
      var delay = el.dataset.index * 300;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 1, height: '1.6em'},
          {complete: done, duration: 300}
        )
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 300;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 0, height: 0},
          {complete: done, duration: 300}
        )
      }, delay)
    }
  }
};
*/

/*new Vue({
  el: '#staggered-list-demo',
  data:{
    list: [
      {msg: 'Bruce Lee',title:'name'},
      {msg: 'Jackie Chan'},
      {msg: 'Chuck Norris'},
      {msg: 'Jet Li'},
      {msg: 'AAs'},
      {msg: 'Kung Fury'}
    ]
  },
  template: `
  <staggered-list :list="list">
      <div class="list-item" slot-scope="props">
        <h1 v-if="props.item.title">{{props.item.title}}</h1>
        <span>{{props.item.msg}}</span>
      </div>
  </staggered-list>
  `,
  components: {
    StaggeredList: StaggeredList
  }
});*/

//动态过渡
/*new Vue({
  data: {
    show:true,
    fadeInDuration: 0,
    fadeOutDuration: 0,
    maxFadeDuration: 5000,
    stop:true
  },
  el: '#dynamic-fade-demo',
  template: `
<div class="demo">
  <p>Fade In: <input type="range" v-model="fadeInDuration" value="0" min="0" :max="maxFadeDuration"></p>
  <p>Fade Out: <input type="range" v-model="fadeOutDuration" value="0" min="0" :max="maxFadeDuration"></p>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
    @beforeEnter="beforeEnter"
  >
    <div class="circular" v-if="show"></div>
  </transition>
  <button
    v-if="stop"
    v-on:click="stop = false; show = false"
  >Start animating</button>
  <button
    v-else
    v-on:click="stop = true"
  >Stop it!</button>
</div>
  `,
  mounted:function () {
    this.show = false;
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      let vm = this;
      Velocity(el, {
        opacity: 1
      }, {
        duration: this.fadeInDuration,
        complete:function () {
          done();
          if(!vm.stop) {
            vm.show = false
          }
        }
      })
    },
    leave: function (el, done) {
      let vm = this;
      Velocity(el, {
        opacity: 0
      },{
        duration: this.fadeOutDuration,
        complete:function () {
          done();
          vm.show = true;
        }
      })
    }
  }
});*/
//状态动画与观察者
/*window.v = new Vue({
  el: '#animated-number-demo',
  template: `
<div class="animated-number-demo">
  <input v-model="number" type="number" step="20">
  <p>{{ animatedNumber }}</p>
</div>
  `,
  data: {
    number: 0,
    animatedNumber: 0
  },
  watch: {
    number: function (new_value, old_value) {
      let vm = this;
      //vm.animatedNumber = vm.number;

      new TWEEN.Tween({tweeningNumber: old_value})
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({tweeningNumber: new_value}, 500)
        .onUpdate(function () {
          console.log(vm.animatedNumber);
          vm.animatedNumber = this.tweeningNumber.toFixed(0);
        })
        .start();



      function animate() {
        if (TWEEN.update()) {
          a++;
          requestAnimationFrame(animate)
        }
      }

      animate();
    }
  }
});*/
//状态动画与观察者(颜色)

/*var Color = net.brehaut.Color;

window.color = new Vue({
  el: '#animated-number-demo',
  template: `
<div class="color">
  <input type="text"
    placeholder="Enter a color"
    v-model="colorQuery"
    @keyup.enter="update"
  >
  <button @click="update">Update</button>
  <div>
    Preview:
    <div class="preview" :style="{backgroundColor:previewCssColor}"></div>
    <p class="preview-text">{{previewCssColor}}</p>
  </div>
</div>
  `,
  data: {
    colorQuery: '',
    color: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1,
    },
    previewColor: {},
  },
  created:function () {
    this.previewColor = Object.assign({},this.color);
  },
  computed: {
    previewCssColor: function () {
      return new Color({
        red: this.previewColor.red,
        green: this.previewColor.green,
        blue: this.previewColor.blue,
        alpha: this.previewColor.alpha
      }).toCSS()
    }
    /!*previewColor:function () {
      return this.color;
    }*!/
  },
  watch: {
    color: function () {
      let vm =this;
      new TWEEN.Tween(this.previewColor)
        .to(this.color, 750)
        .start();

      animate();

      function animate() {
        console.log(vm.previewColor.red);
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
    }
  },
  methods: {
    update: function () {
      this.color = new Color(this.colorQuery).toRGB();
      this.colorQuery = '';
    }
  }
});*/

//把过渡放到组件里
/*var AnimateNumber = {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      tweeningValue: 0
    };
  },
  watch: {
    value: function (new_value, old_value) {
      this.tween(old_value,new_value);
    }
  },
  mounted: function () {
    this.tween(0, this.value)
  },
  methods: {
    tween: function (start_value, end_value) {
      let vm = this;
      new TWEEN.Tween({tweeningValue: start_value})
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({tweeningValue: end_value}, 500)
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0);
        })
        .start();

      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      animate();
    }
  },
  template: `
    <span>{{tweeningValue}}</span>
  `
};

new Vue({
  el: '#example-8',
  components: {
    AnimateNumber: AnimateNumber
  },
  data: {
    num_1: 28,
    num_2: 40
  },
  computed: {
    result: function () {
      return this.num_1 + this.num_2;
    }
  },
  template: `
<div>
    <input style="width: 60px" type="number" v-model.number="num_1"/> + <input style="width: 60px" type="number" v-model.number="num_2"/> = {{result}}
    <div><animate-number :value="num_1"/> + <animate-number :value="num_2"/> = <animate-number :value="result"/></div>
</div>
    `,
});*/

//混合
// 定义一个混合对象
/*var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
};

// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
});

var component = new Component(); // => "hello from mixin!"*/

// 为自定义的选项 'myOption' 注入一个处理器。
/*Vue.mixin({
  mounted: function () {
    console.log(this.$options);
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption)
    }
  }
});

new Vue({
  myOption: 'hello!',
  el:'#example-9'
});*/

//自定义指令
// 注册一个全局自定义指令 `v-focus`
/*Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    /!*el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
    console.log(vnode);*!/
  }
});

Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value.color;
  el.innerHTML = binding.value.message
});

new Vue({
  el: '#example-10',
  template: `<div><input v-model="color"/><div v-demo:foo.a.b="message" v-color-swatch="info" class="directive"></div></div>`,
  data: {
    color: '#123',
    message: 'hello!'
  },
  computed: {
    info: function () {
      return {
        color: this.color,
        message: this.message
      }
    }
  }
});*/

//节点、树以及虚拟-DOM
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
};

Vue.component('anchored-heading', {
  render: function (createElement) {
    // create kebabCase id
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^\-|\-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

new Vue({
  el: '#example-11',
  template: `
<div>
  <anchored-heading :level="1">
    <p>
      <ul>
        <li>jamieTsang</li>
        <li>jamieTsang1233</li>
      </ul>
    </p>
  </anchored-heading>
</div>
  `
});
