<template>
  <div class="example-container">
    <el-select @change="langChange" placeholder="请选择" :value="lang">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <p>{{ $t("message") }}</p>
    
    <el-table
      :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Lang extends Vue {
  lang = "zh"
  tableData = []
  options = [
    {
      value: "zh",
      label: "中文"
    },
    {
      value: "en",
      label: "English"
    }
  ]

  langChange(e: string) {
    this.$i18n.locale = e;
    this.lang = e;
  }
}
</script>

<style scoped lang="scss">
  .title {
    font-size: 32px;
    color: $gray;
  }
</style>
