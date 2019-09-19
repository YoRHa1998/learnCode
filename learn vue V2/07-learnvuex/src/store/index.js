import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{   //用于存放状态
    count:1000,
    student:[
      {id:100,name:"naruto",age:18},
      {id:101,name:"sasiki",age:14},
      {id:102,name:"sora",age:25},
      {id:103,name:"siro",age:27},
    ]
  },
  mutations:{
    //用于定义方法
    increment(state){   //定义的方法中默认会传入一个state参数
      state.count++
    },
    decrement(state){
      state.count--
    },
  },
  actions:{    //用于处理异步操作

  },
  getters:{     //类似于计算属性
    powercount(state){    //getters中定义的属性也是默认传入一个state属性
      return state.count * state.count
    },
    more20stu(state){    //获取大于20岁的学生
      return state.student.filter(s => s.age>20)   //通过数组方法中的filter()函数，s为传入的数组，通过箭头函
                                                   //头函数，来判断年龄大于20岁的学生
    },
    more20stulength(state,getters){   //getters中的参数除了state，还可以传入getters，来获取其他getter
      return getters.more20stu.length
    },
    moreage(state){    //当我们想要给getter传参数时，可以在getter中返回一个函数，这样在使用时传入参数时便能传入
                       //到函数中，这时候便能在函数中通过参数进行一些操作
      return function(age){  //在函数中传入参数，这样便能动态的决定age大小
        return state.student.filter(s => s.age>age)
      }
    }
  },
  modules:{}
})

export default store