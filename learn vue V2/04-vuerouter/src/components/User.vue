<template>
  <div>
    <h2>我是用户</h2>
    <p>我是内容，嘿嘿嘿</p>
    <h2>{{ $route.params.userid }}</h2>
    <!-- $route代表正在活跃的路由，而之前使用的$router代表我们new出来的路由实例 -->
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style>

</style>