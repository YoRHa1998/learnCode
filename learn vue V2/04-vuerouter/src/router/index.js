import Vue from 'vue'
import Router from 'vue-router'

// //导入要使用的组件，正常导入方法
// import Home from '../components/Home'    
// import About from '../components/About'
// import User from '../components/User'      

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')  //路由的懒加载方式写法,以后路由的导入当时都要采用懒加载的方式
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(Router)

const routes = [
  {  //设置默认路径，当路径为空是，把路径重定向到另一个路径，这里是重定向到首页
    path:"",
    redirect:"/home"   //redirect:重定向
  },
  {  //每一个路由都是一个对象
    path:"/home",   //path用于设置url后面跟的东西
    component:Home,    //component表示这个path对应的组件
    meta:{
      title:"首页",
    },
    children:[         //嵌套路由在要嵌套的路由里使用children属性，传入一个数组
      {
        path:'home',     //在子路由中，依旧可以设置默认值,注意不要写斜杠，且下面是redirect，别写成component了
        redirect:"news"   
      },
      {
        path:'news',       //在子路由里，前面不用写斜杠
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]       
  },
  {
    path:"/about",
    component:About,
    meta:{
      title:"关于",
    },
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter')
      next()
    }
  },
  {
    path:"/User/:userid",
    component:User,
    meta:{
      title:"用户",
    },
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title:"档案",
    },
  }
]

const router = new Router({
  routes,
  mode:'history'  //将路径模式设置为HTML5的history模式，这样就不会有#号了
})

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log("+++++++");
  next()
})

router.afterEach((to,from)=>{
  // console.log("------");
  
})

export default router