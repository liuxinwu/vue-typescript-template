<template>
  <div class="vuex-container">
    <p>{{ getMsg }}</p>

    <el-button @click="setMsg('change msg ' + Math.random())">setMsg</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component,  } from 'vue-property-decorator'
import { namespace } from "vuex-class"
import HomeModule from "@/store/default/home.vuex.ts"

const homeModule = namespace('homeStore');

@Component
export default class Vuex extends Vue {
  @homeModule.Getter('msg') getMsg?: string
  @homeModule.Mutation('setMsg') setMsg?: () => void

  created() {
    this.$store.registerModule('homeStore', HomeModule)
    console.log(this.getMsg, "this.getMsg ")
  }

  beforeDestroy() {
    console.log("vuex.vue beforeDestroy")
    this.$store.unregisterModule('homeStore')
  }
}
</script>