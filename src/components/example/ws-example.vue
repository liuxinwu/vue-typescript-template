<template>
  <div class="ws-container">
    <el-button @click="handleClose">close</el-button>
    <el-button @click="handleStart">start</el-button>
    
    <el-button @click="handleUnsubscribe">unsubscribe</el-button>
    <el-button @click="handleDestroy">destroy</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Ws from "@/utils/ws";

@Component({})

export default class WsExample extends Vue {
  WS: Ws;
  handleChat: (data: object) => any;
  timeId: number;

  constructor() {
    super();
    console.log("constructor");

    // 第一个连接
    this.WS = new Ws("ws://localhost:6050", "echo-protocol", false);
    this.WS.send("conent success");
    this.handleChat = (data: object) => console.log(data);
    this.WS.subscribe("chat", this.handleChat);

    let count = 0;
    this.timeId = setInterval(() => {
      ++count;
      this.WS.send(`count: ${count}`);
    }, 1000);
  }

  created() {
    // 第二个连接
    const WS2 = new Ws("ws://localhost:6050", "echo-protocol", false);
    WS2.send("conent success");
    const handleChat2 = (data: object): any => console.log(data);
    WS2.subscribe("chat", handleChat2);

    let count2 = 0;
    setInterval(() => {
      ++count2;
      WS2.send(`count2: ${count2}`);

      if (count2 === 20) {
        WS2.unsubscribe("chat", handleChat2);
      }
    }, 1000);
  }

  handleClose() {
    clearInterval(this.timeId);
    this.WS.close();
  }

  handleStart() {
    this.WS.start();
  }

  handleUnsubscribe() {
    this.WS.unsubscribe("chat", this.handleChat);
  }

  handleDestroy() {
    clearInterval(this.timeId);
    this.WS.destroy();
  }
}
</script>

<style scoped lang="scss">
</style>
