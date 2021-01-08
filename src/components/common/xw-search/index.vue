<template>
  <div class="search-container">
    <ul ref="ListEl" class="search-list">
      <li v-for="search in searchList" :key="search.label" class="search-item">
        <label class="search-item-label">{{ search.label }}</label>
        <generate-el
          class="search-item-main"
          :option="search"
          :searchParams="searchParams"
        />
      </li>
      <li class="search-item">
        <slot />
      </li>
    </ul>
    <div class="search-btn-group">
      <el-button type="primary" @click="handleSearch" size="mini">搜索</el-button>
      <el-button ref="moreBtnEl" @click="handleMore" size="mini">{{
        height === "auto" ? "收起" : "展开"
      }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { SearchOption, SearchParams } from "./index.type";
import GenerateEl from "./generateEl.vue";

const HEIGHT: string | number = 50;

@Component({
  components: { GenerateEl },
})
export default class XwSearch extends Vue {
  [index: string]: any

  // 搜索配置项
  // elType 基本满足 elment-ui 中 Form 类型的组件
  @Prop({
    type: Array,
    required: true,
  })
  searchOption!: SearchOption[];

  // 搜索结果
  @Prop({
    type: Object,
    required: true,
  })
  searchParams!: SearchParams;

  @Emit("onSearch")
  emitOnSearch() {
    return;
  }

  // 得到搜索项
  get searchList() {
    return this.searchOption.map((search) => {
      const {
        startKey,
        endKey,
        startDefaultValue = "",
        endDefaultValue = "",
      } = search;

      // 设置搜索结果配置项
      this.$set(this.searchParams, startKey, startDefaultValue);
      if (endKey) {
        this.$set(this.searchParams, endKey, endDefaultValue);
      }
      return search;
    });
  }

  height = HEIGHT;

  mounted() {
    this.listEl = this.$refs.ListEl as HTMLElement;
    const moreBtnEl = (this.$refs.moreBtnEl as any).$el;
    const height = this.listEl.getClientRects()[0].height;
    
    this.listEl.style.height = `${HEIGHT}px`;
    if (height <= HEIGHT) {
      moreBtnEl.style.display = 'none';
    }
  }

  handleSearch() {
    this.emitOnSearch();
  }

  handleMore() {
    this.height === "auto"
      ? (this.height = `${HEIGHT}px`)
      : (this.height = "auto");
    this.listEl.style.height = this.height;
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: self-start;

  .search-list {
    display: flex;
    flex-flow: row wrap;
    overflow: hidden;

    .search-item {
      width: 300px;
      padding: 5px 10px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .search-item-label {
        width: 80px;
        text-align: left;
      }

      .search-item-main {
        flex: 1;
      }

      &:last-child {
        width: auto;
      }
    }
  }

  .search-btn-group {
    display: flex;
    align-items: center;
    height: 50px;
    padding-right: 10px;
  }
}
</style>
