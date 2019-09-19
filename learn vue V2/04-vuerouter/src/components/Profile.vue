<template>
  <div>
    <h2>我是档案</h2>
    <h3>{{ $route.query.name }}</h3>
    <h3>{{ $route.query.age }}</h3>
    <h3>{{ $route.query.height }}</h3>
  </div>
</template>

<script>
export default {
  name:'Profile',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    console.log('created Profile');
  },
  beforeDestroy() {
    console.log('beforeDestroy Profile');
    
  },
  mounted(){}
}
</script>
<style>

</style>