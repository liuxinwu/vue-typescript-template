<!-- 
  坑点
  <template functional>
  路由出口不能使用函数式单文件组件
-->
<template>
  <div class="other-layout">
    <el-container>
      <el-header>
        <h3>other-layout</h3>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class OtherLayout extends Vue {}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 60px;
  }

  .el-container {
    min-height: calc(100vh - 76px);
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>