import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cars = () => import('../views/cars/Cars')
const Profile = () => import('../views/profile/Profile')

export default new Router({
  routes: [
    {
      path:'',
      redirect:"/home"
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cars',
      component:Cars
    },
    {
      path:'/profile',
      component:Profile
    },
  ],
  mode:'history'   //注意：使用history要用引号
})
