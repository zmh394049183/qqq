<template>
  <div>
    <p>我是home</p>
    <router-link to="/home/c">C</router-link>
    <router-link to="/home/b">B</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "Home"
};
</script> 

<style scoped>
</style>