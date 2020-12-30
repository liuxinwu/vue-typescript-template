import { VueConstructor, PluginObject } from "vue";
import pluginConfig from "./config"

const plugins: {
  name: string,
  default: PluginObject<object>
}[] = [];
const pluginModule = require.context("./", true, /\.plugin\.ts$/)
pluginModule.keys().forEach(_ => {
  const name = _.match(/([a-zA-Z]+)\.plugin\.ts$/)?.[1]
  
  if (name) {
    plugins.push({
      name,
      default: pluginModule(_).default
    })
  }
})

export default {
  install(Vue: VueConstructor) {
    for (const item of plugins) {
      Vue.use(item.default, pluginConfig[item.name]);
    }
  }
}