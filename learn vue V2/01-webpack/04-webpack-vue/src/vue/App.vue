<template>
    <div id="app">
    <h2>{{ message }}</h2>
    <h3>{{ msg }}</h3>
    <button @click="btnclick">按钮</button>
    <Cpn1></Cpn1>
    <!-- 在模板中使用新的组件 -->
    </div>
</template>

<script>

import Cpn1 from "./Cpn1.vue"  //导入新的组件

export default {
  components:{
    Cpn1  //在components中注册新的组件
  },
  props:{},
  data(){
    return {
    message:"hello",
    msg:"这是直接写在vue文件中的msg"
    }
  },
  watch:{},
  computed:{},
  methods:{
    btnclick(){
    console.log("btnclick");
    }
  },
  created(){},
  mounted(){}
}
</script>
<style>
</style>