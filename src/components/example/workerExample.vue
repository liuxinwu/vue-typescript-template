<template>
  <div class="worker-container">
    <p>
      <pre>
        {{ result }}
      </pre>
    </p>
    <el-button @click="handleComputed(false)">not use Worker</el-button>
    <p>
      <pre>
        {{ workerResult }}
      </pre>
    </p>
    <el-button @click="handleComputed(true)">use Worker</el-button>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"

  @Component({})
  export default class WorkerExample extends Vue {
    result = {
      count: 0,
      time: 0
    }

    workerResult = {
      count: 0,
      time: 0
    }

    handleComputed(isWorker = false) {
      // 使用 Worker 函数执行时间过长不会导致页面卡死
      if (isWorker) {
        if (window.Worker) {
          const worker = new Worker('/static/worker/test.worker.js')

          worker.onmessage = e => {
            this.workerResult = e.data
          }
        }

        return
      }

      // 不使用 Worker 函数执行时间过长会导致页面卡死
      this.result = this.sum()
    }

    sum(): any {
      let count = 0
      const startTime = Date.now()
      for (let i = 0; i < 1000 * 1000 * 1000; i++) {
        count++
      }
      const time = `${(Date.now() - startTime) / 1000}s`

      return {
        count,
        time
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>