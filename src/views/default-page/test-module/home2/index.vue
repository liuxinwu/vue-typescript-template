<template>
  <div>
    Home2

    <p>{{ getMsg }}</p>

    <el-button @click="setMsg('change msg ' + Math.random())">setMsg</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { namespace } from "vuex-class"
import HomeModule from "@/store/default/home.vuex.ts"

const homeModule = namespace('home2Store');

@Component
export default class Home2 extends Vue {
  @homeModule.Getter('msg') getMsg?: string
  @homeModule.Mutation('setMsg') setMsg?: () => void

  created() {
    console.log("home2")
    this.$store.registerModule('home2Store', HomeModule)
  }

  beforeDestroy() {
    console.log("home2.vue beforeDestroy")
    this.$store.unregisterModule('home2Store')
  }
}
</script>