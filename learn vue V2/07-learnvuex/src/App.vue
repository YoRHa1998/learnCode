<template>
  <div id="app">
    <h2>{{ $store.state.count }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <h3>{{ $store.getters.powercount }}</h3>

    <h3>{{ $store.getters.more20stu }}</h3>

    <h3>{{ $store.getters.more20stulength }}</h3>

    <h3>{{ $store.getters.moreage(20) }}</h3>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import helloVuex from "./components/helloVuex"

export default {
  name: 'App',
  data() {
    return {
      message:'我是message'
    }
  },
  methods: {
    add(){
      this.$store.commit('increment')   //通过mutation进行修改state，在这里通过this.$store.commit()方法提交
    },
    sub(){
      this.$store.commit('decrement')
    }
  },
  components: {
    helloVuex
  }
}
</script>

<style>

</style>
