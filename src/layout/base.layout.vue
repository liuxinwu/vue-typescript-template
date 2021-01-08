<!-- 
  坑点
  <template functional>
  路由出口不能使用函数式单文件组件
-->
<template>
  <div class="base-layout">
    <el-container>
      <el-header>
        <h3>base-layout</h3>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul id="nav">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/home2">Home2</router-link></li>
            <li>
              <router-link to="/other/news1" target="_blank">List</router-link>
            </li>
          </ul>
        </el-aside>
        <el-main>
          <transition name="page">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class BaseLayout extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/pageAnimate.scss";

#nav {
  li {
    padding: 10px 20px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}

.el-container {
  min-height: calc(100vh - 76px);
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
}
</style>
