<template>
  <generate-el-table :tableAttribute="tableOption.tableAttribute">
    <template v-for="column in tableOption.tableColumn">
      <generate-el-table-column :key="column.label" :column="column" />
    </template>
  </generate-el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Table, TableColumn } from "element-ui";
import GenerateElTable from "./generateElTable";
import GenerateElTableColumn from "./generateElTableColumn";

@Component({
  components: {
    GenerateElTable,
    GenerateElTableColumn,
  },
})
export default class XwTable extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  tableOption!: {
    tableAttribute: Table;
    tableColumn: TableColumn;
  };
}
</script>

<style lang="scss" scoped></style>
