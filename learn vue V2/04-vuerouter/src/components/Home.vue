<template>
  <div>
    <h2>我是主页</h2>
    <p>我是内容，啊哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      path:'/home/news'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    console.log('home createed');
  },
  mounted(){},
  destroyed() {
    console.log('home destroyed');
  },
  activated() {
    this.$router.push(this.path)    //当组件变为活跃状态时回调的函数，这里转变为离开前的路径
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path   //组件内的守卫，记录了离开时的路径
    next()
  }
}
</script>
<style>

</style>