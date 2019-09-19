<template>
  <div id="tab-bar">
    <slot></slot>
    <!-- 设置一个匿名插槽，用于接收App.vue中tabBar中的tabBarItem组件 -->
  </div>
</template>

<script>

export default {
  name:'tabBar',
  components:{
  },
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
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  /* fixed：生成绝对定位的元素，相对于 浏览器窗口 进行定位。 */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .3)  
  /* box-shadow用于设置阴影，有四个值，分别为x偏移值 y偏移值 阴影厚度 颜色 */
}

</style>