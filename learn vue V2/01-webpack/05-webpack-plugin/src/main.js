import {increment,mul} from "./js/mathUlits.js"
console.log(increment(30,40));
console.log(mul(30,40));

require('./css/normal.css')

import Vue from "vue"  //使用vue时先通过import引入vue模块
import App from "./vue/App.vue" //这里引用vue模板，然后直接在vue实例中使用就性了

new Vue({  //真实开发中一般不用把vue实例赋值给一个变量，直接new一下就可以了
  el:"#app",
  template:'<App></App>',
  components:{
    App
  }
})