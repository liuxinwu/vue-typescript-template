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
        <el-aside width="200px">
          <ul id="nav">
            <li><router-link to="news1">news1</router-link></li>
            <li><router-link to="news2">news2</router-link></li>
          </ul>
        </el-aside>
        <el-main>
          <transition name="page">
            <keep-alive max="5">
              <router-view v-if="$route.meta.isCache" />
            </keep-alive>
          </transition>
          <transition name="page">
            <router-view v-if="!$route.meta.isCache" />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OtherLayout extends Vue {}
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
