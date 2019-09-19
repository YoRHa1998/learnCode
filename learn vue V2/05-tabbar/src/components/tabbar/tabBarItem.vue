<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactivated"><slot name="item-icon"></slot></div>
    <!-- 在插槽外面包裹一层div，用v-if动态决定显示哪一个插槽 -->
    <div v-else><slot name="item-icon-activated"></slot></div>
    <div :class="{active:isactivated}"><slot name="item-text"></slot></div>
    <!-- 在tabBarItem中设置两个具名插槽，这样便能动态的获取item的图片和文字 -->
  </div>
</template>

<script>
export default {
  name:"tabBarItem",
  components:{},
  props:{
    path:String,   //通过props接受父组件传来的值
    activeColor:{
      type:String,
      default:'hotpink'
    }
  },
  data(){
    return {
      // isactivated:false
    }
  },
  watch:{},
  computed:{
    isactivated(){
      return this.$route.path.indexOf(this.path) != -1    //判断当前活跃的路由path是否和传过来的path相同，一样
                                                          //则返回true,tabbaritem显示活跃的样式
    },
    activeStyle(){
      return this.isactivated ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      if(this.$route.path != this.path){   //判断当前活跃的路由path是否和传过来的path一样，如果不一样，则跳转路由
                                           //用于解决相同路由重复赋值的报错
      this.$router.push(this.path)     //通过$router的push方法跳转路由
      }
    }
  },
  created(){},
  mounted(){}
}
</script>
<style>
.tab-bar-item img{
  width: 20px;
  width: 20px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 1px;
}
.tab-bar-item{
  flex: 1; 
  /* flex:1 表示让元素都有相同的长度，且忽略它们内部的内容 */
  text-align: center;
  height: 49px;
  font-size: 9px;
}
.active{
  color:hotpink
}
</style>