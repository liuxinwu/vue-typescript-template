<template>
  <div class="other-list-container">
    <xw-list v-bind="listOption" @getList="getList" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import XwList from "@/components/business/xw-list/index.vue";
import CoustomColumnHeader from "./component/coustomColumnHeader.vue";
import CoustomColumn from "./component/coustomColumn.vue";
import Request from "@/utils/requestInstance";

@Component({
  components: {
    XwList,
  },
})
export default class List extends Vue {
  listOption = {
    searchOption: [
      {
        elType: "el-input",
        label: "el-input",
        startKey: "el-input",
        startDefaultValue: "el-input",
      },
      {
        elType: "el-input-number",
        label: "el-input-number",
        startKey: "el-input-number",
      },
      {
        elType: "el-select",
        label: "el-select",
        startKey: "el-select",
        startDefaultValue: 18,
        options: [
          {
            label: 18,
            value: 18,
          },
          {
            label: 20,
            value: 20,
          },
          {
            label: 22,
            value: 22,
          },
        ],
      },
      {
        elType: "el-cascader",
        label: "el-cascader",
        startKey: "el-cascader",
        props: {
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                    },
                    {
                      value: "fankui",
                      label: "反馈",
                    },
                    {
                      value: "xiaolv",
                      label: "效率",
                    },
                    {
                      value: "kekong",
                      label: "可控",
                    },
                  ],
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    {
                      value: "cexiangdaohang",
                      label: "侧向导航",
                    },
                    {
                      value: "dingbudaohang",
                      label: "顶部导航",
                    },
                  ],
                },
              ],
            },
            {
              value: "zujian",
              label: "组件",
              children: [
                {
                  value: "basic",
                  label: "Basic",
                  children: [
                    {
                      value: "layout",
                      label: "Layout 布局",
                    },
                    {
                      value: "color",
                      label: "Color 色彩",
                    },
                    {
                      value: "typography",
                      label: "Typography 字体",
                    },
                    {
                      value: "icon",
                      label: "Icon 图标",
                    },
                    {
                      value: "button",
                      label: "Button 按钮",
                    },
                  ],
                },
                {
                  value: "form",
                  label: "Form",
                  children: [
                    {
                      value: "radio",
                      label: "Radio 单选框",
                    },
                    {
                      value: "checkbox",
                      label: "Checkbox 多选框",
                    },
                    {
                      value: "input",
                      label: "Input 输入框",
                    },
                    {
                      value: "input-number",
                      label: "InputNumber 计数器",
                    },
                    {
                      value: "select",
                      label: "Select 选择器",
                    },
                    {
                      value: "cascader",
                      label: "Cascader 级联选择器",
                    },
                    {
                      value: "switch",
                      label: "Switch 开关",
                    },
                    {
                      value: "slider",
                      label: "Slider 滑块",
                    },
                    {
                      value: "time-picker",
                      label: "TimePicker 时间选择器",
                    },
                    {
                      value: "date-picker",
                      label: "DatePicker 日期选择器",
                    },
                    {
                      value: "datetime-picker",
                      label: "DateTimePicker 日期时间选择器",
                    },
                    {
                      value: "upload",
                      label: "Upload 上传",
                    },
                    {
                      value: "rate",
                      label: "Rate 评分",
                    },
                    {
                      value: "form",
                      label: "Form 表单",
                    },
                  ],
                },
                {
                  value: "data",
                  label: "Data",
                  children: [
                    {
                      value: "table",
                      label: "Table 表格",
                    },
                    {
                      value: "tag",
                      label: "Tag 标签",
                    },
                    {
                      value: "progress",
                      label: "Progress 进度条",
                    },
                    {
                      value: "tree",
                      label: "Tree 树形控件",
                    },
                    {
                      value: "pagination",
                      label: "Pagination 分页",
                    },
                    {
                      value: "badge",
                      label: "Badge 标记",
                    },
                  ],
                },
                {
                  value: "notice",
                  label: "Notice",
                  children: [
                    {
                      value: "alert",
                      label: "Alert 警告",
                    },
                    {
                      value: "loading",
                      label: "Loading 加载",
                    },
                    {
                      value: "message",
                      label: "Message 消息提示",
                    },
                    {
                      value: "message-box",
                      label: "MessageBox 弹框",
                    },
                    {
                      value: "notification",
                      label: "Notification 通知",
                    },
                  ],
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "menu",
                      label: "NavMenu 导航菜单",
                    },
                    {
                      value: "tabs",
                      label: "Tabs 标签页",
                    },
                    {
                      value: "breadcrumb",
                      label: "Breadcrumb 面包屑",
                    },
                    {
                      value: "dropdown",
                      label: "Dropdown 下拉菜单",
                    },
                    {
                      value: "steps",
                      label: "Steps 步骤条",
                    },
                  ],
                },
                {
                  value: "others",
                  label: "Others",
                  children: [
                    {
                      value: "dialog",
                      label: "Dialog 对话框",
                    },
                    {
                      value: "tooltip",
                      label: "Tooltip 文字提示",
                    },
                    {
                      value: "popover",
                      label: "Popover 弹出框",
                    },
                    {
                      value: "card",
                      label: "Card 卡片",
                    },
                    {
                      value: "carousel",
                      label: "Carousel 走马灯",
                    },
                    {
                      value: "collapse",
                      label: "Collapse 折叠面板",
                    },
                  ],
                },
              ],
            },
            {
              value: "ziyuan",
              label: "资源",
              children: [
                {
                  value: "axure",
                  label: "Axure Components",
                },
                {
                  value: "sketch",
                  label: "Sketch Templates",
                },
                {
                  value: "jiaohu",
                  label: "组件交互文档",
                },
              ],
            },
          ],
        },
      },
      {
        elType: "el-switch",
        label: "el-switch",
        startKey: "el-switch",
      },
      {
        elType: "el-time-picker",
        label: "el-time-picker",
        startKey: "el-time-picker",
      },
      {
        elType: "el-date-picker",
        label: "el-date-picker",
        startKey: "el-date-picker",
        props: {
          type: "dates",
        },
      },
      {
        elType: "el-date-picker",
        label: "el-date-time-picker",
        startKey: "el-date-time-picker-start",
        endKey: "el-date-time-picker-end",
        props: {
          type: "datetimerange",
          rangeSeparator: "至",
          startPlaceholder: "开始日期",
          endPlaceholder: "结束日期",
        },
      },
      {
        elType: "el-color-picker",
        label: "el-color-picker",
        startKey: "el-color-picker",
      },
    ],
    tableOption: {
      tableAttribute: {
        props: {
          data: [],
          // stripe: true,
          // rowClassName: this.tableRowClassName,
          // height: 350,
          // highlightCurrentRow: true,
          // showSummary: true,
          // spanMethod: this.arraySpanMethod
        },
        on: {
          // 命名必须与 elment-ui 不能使用驼峰
          // "selection-change"(val: any) {
          //   console.log(val, "selectionChange");
          // },
          // "current-change": (currentRow: any, oldCurrentRow: any) => {
          //   console.log(currentRow, oldCurrentRow)
          // }
        },
      },
      tableColumn: Object.freeze([
        {
          props: {
            type: "selection",
            // 使用列固定由于 element-ui 的设计问题
            // 会渲染两次表格
            // fixed: "left",
          },
        },
        {
          props: {
            type: "index",
            label: "#",
          },
        },
        {
          props: {
            // 列属性
            label: "日期",
            prop: "date",
            width: 180,
          },
          slots: {
            // 插槽
            header: {
              component: CoustomColumnHeader,
            }, // 自定义头
            default: {
              options: {
                el: "el-date-picker",
                props: {
                  valueFormat: "yyyy-MM-dd",
                },
              },
              component: CoustomColumn,
            }, // 自定义列
          },
        },
        {
          props: {
            label: "配送信息",
          },
          columnChild: [
            {
              props: {
                label: "姓名",
                prop: "name",
              },
              slots: {
                default: {
                  options: {
                    el: "el-input",
                  },
                  component: CoustomColumn,
                },
              },
            },
            {
              props: {
                label: "地址",
              },
              columnChild: [
                // 多级表头
                {
                  props: {
                    label: "省份",
                    prop: "province",
                  },
                },
                {
                  props: {
                    label: "市区",
                    prop: "city",
                  },
                },
                {
                  props: {
                    label: "地址",
                    prop: "address",
                    width: 200,
                    showOverflowTooltip: true,
                  },
                },
                {
                  props: {
                    label: "邮编",
                    prop: "zip",
                    sortable: true,
                  },
                },
              ],
            },
          ],
        },
        {
          props: {
            label: "操作",
            prop: "operation",
            width: 220,
          },
          slots: {
            default: {
              options: {
                el: "el-button",
                props: {
                  type: "primary",
                  size: "mini",
                },
                buttons: [
                  {
                    text: "编辑",
                    show: (row: any): boolean => {
                      return !row.isEdit;
                    },
                    click: (row: any) => {
                      this.$set(row, "isEdit", true);
                    },
                    directives: [
                      {
                        name: "permissions",
                        value: "edit",
                        arg: "List",
                      },
                    ],
                  },
                  {
                    text: "保存",
                    loading: "saveLoading",
                    show: (row: any): boolean => {
                      return row.isEdit;
                    },
                    click: (row: any, btn: any) => {
                      this.$set(row, btn.loading, true);

                      setTimeout(() => {
                        this.$set(row, btn.loading, false);
                        this.$set(row, "isEdit", false);
                      }, 1000);
                    },
                  },
                  {
                    text: "取消",
                    props: {
                      type: "",
                    },
                    show: (row: any): boolean => {
                      return row.isEdit;
                    },
                    click: (row: any) => {
                      row.isEdit = false;
                    },
                  },
                  {
                    text: "删除",
                    props: {
                      type: "danger",
                    },
                    show: (): boolean => {
                      return true;
                    },
                    directives: [
                      {
                        name: "permissions",
                        value: "delete",
                        arg: "List",
                      },
                    ],
                  },
                ],
              },
              component: CoustomColumn,
            },
          },
        },
      ]),
    },
    paginationOption: {
      total: 0,
      currentPage: 1,
      background: true,
    },
  };

  tableRowClassName({ rowIndex }: any) {
    if (rowIndex === 0) {
      return "warning-row";
    } else if (rowIndex === 2) {
      return "success-row";
    }
    return "";
  }

  arraySpanMethod({ rowIndex, columnIndex }: any) {
    if (rowIndex % 2 === 0) {
      if (columnIndex === 0) {
        return [1, 2];
      } else if (columnIndex === 1) {
        return [0, 0];
      }
    }
  }

  async getList(params: { [index: string]: number | string }) {
    console.log(params, "getList");
    const { tableOption, paginationOption } = this.listOption;

    try {
      const res = await Request.get(
        "http://localhost:8080/user-list",
        {
          params,
        },
        { isNeedToken: true }
      );
      const { data, total = 0 } = res.data;
      tableOption.tableAttribute.props.data = data;
      paginationOption.total = total;
    } catch (error) {
      console.error(error, "getList");
    }
  }
}
</script>

<style lang="scss" scoped>
.other-list-container /deep/ .warning-row {
  background: #fdf5e6;
}
.other-list-container /deep/ .success-row {
  background: #d0d6fc;
}
</style>
