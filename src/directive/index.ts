import { VueConstructor } from "vue";

const directives: {
  [index: string]: object
} = {};
const directiveModule = require.context("./", true, /\.directive\.ts$/)
directiveModule.keys().forEach(_ => {
  const key = _.match(/([a-zA-Z]+)\.directive\.ts$/)?.[1]

  if (key) {
    directives[key] = directiveModule(_).default
    console.log(`注册 ${key} 指令成功`)
  } else {
    console.error(`注册${ _ }指令失败`)
  }
})

export default {
  install(Vue: VueConstructor) {
    for (const key in directives) {
      if (Object.prototype.hasOwnProperty.call(directives, key)) {
        Vue.directive(key, directives[key]);
      }
    }
  }
}