<template>
  <div class="home">
    <h1 class="title animate__animated animate__infinite animate__shakeX">test request</h1>
    <request-example />

    <h1 class="title" v-animate="'animate__infinite animate__shakeX'">test WebSocket</h1>
    <ws-example />

    <h1 class="title animate__animated animate__infinite animate__fadeIn">Lang</h1>
    <lang-example />

    <h1 class="title">Vuex</h1>
    <vuex-example />

    <h1 class="title">Directive</h1>
    <p v-copy>点我复制 <span>😯</span></p>

    <h1 class="title">Longpress</h1>
    <p v-longpress="longpress">长按 <span>😯</span></p>

    <worker-example />

    <img
      v-lazyLoad="lazySrc"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RequestExample from "@/components/example/requestExample.vue";
import WsExample from "@/components/example/wsExample.vue";
import LangExample from "@/components/example/langExample.vue";
import VuexExample from "@/components/example/vuexExample.vue";
import WorkerExample from "@/components/example/workerExample.vue";

@Component({
  components: {
    RequestExample,
    WsExample,
    LangExample,
    VuexExample,
    WorkerExample
  }
})

export default class Home extends Vue {
  lazySrc = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2754522765,4239052193&fm=26&gp=0.jpg"

  longpress() {
    console.log("触发长按事件")
  }
}
</script>

<style lang="scss">
h1 {
  padding: 20px 0;
  font-size: 30px;
  font-weight: 700;
}
</style>