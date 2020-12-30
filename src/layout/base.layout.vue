<!-- 
  坑点
  <template functional>
  路由出口不能使用函数式单文件组件
-->
<template>
  <div class="base-layout">
    <h3>base-layout</h3>
    
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/home2">Home2</router-link> |
      <router-link to="/other/list" target="_blank">List</router-link>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator'

  export default class BaseLayout extends Vue {}
</script>

<style lang="scss" scoped>
.base-layout {
  padding: 50px 20%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>