<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userid" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'YoRHa',age:'18',height:'1.88'}}" tag="button">档案</router-link>
    <!-- 通过<router-link to="">设置对应的路由，渲染出来为一个a标签 -->
    <!-- <button @click="homeclick">主页</button> -->
    <!-- <button @click="aboutclick">主页</button> -->

    <keep-alive exclude="Profile">
      <!-- exclude表示排除通过值检索到的组件 -->
      <router-view></router-view>
    </keep-alive>
    <!-- 通过<router-view>设置组件显示的位置 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid:"zhangsan"
    }
  },
  methods: {
    // homeclick(){
    //   this.$router.push('/home')  //通过代码的方式来修改router
    // },
    // aboutclick(){
    //   this.$router.push('/about')
    // },
  },
}
</script>

<style>

</style>
