<template>
  <div class="flex-column">
    <h1>{{ msg }}</h1>
    <button @click="()=>{$router.push('pageIndicator')}">进入页码组件示例页面</button>
    <button @click="()=>{$router.push('LifecycleExample')}">进入生命周期函数演示页面</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-column{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  button{
    margin: 10px;
  }
</style>
