<template>
  <div class="example-container">
    <el-button type="primary" @click="handleClick">test request</el-button>
    <br />
    <br />
    <el-button @click="handleList(1)">列表一</el-button>
    <el-button @click="handleList(2)">列表二</el-button>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AxiosResponse } from "axios";

@Component({})
export default class RequestExample extends Vue {
  type = 1
  list: any[] = []

  async handleClick() {
    this.$axios.get("/use-mock");
    this.$axios.get("/test");
    this.$axios.get("/test1");
    const res1 = this.$axios.get("/epidemic", {
      params: {
        type: "column",
      },
    });
    let res2
    try {
      res2 = await this.$axios.get("http://192.168.90.30:3000/test");
    } catch (error) {
      console.log(error, "error")
    }
    console.log(res1, res2);
  }

  async handleList(type: number) {
    this.type = type
    const option = {
      params: {
        type
      },
      type
    }
    const res: {
      [index: string]: any
    } | AxiosResponse = await this.$axios.get("list", option)

    // 解决多 tab 切换 上一个 tab 数据覆盖当前 tab 数据的问题（在不取消重复请求的情况下）
    if (res.config.type === this.type) {
      this.list = res.data
    }
    
  }
}
</script>

<style scoped lang="scss">
  .title {
    font-size: 32px;
    color: $gray;
  }
</style>
