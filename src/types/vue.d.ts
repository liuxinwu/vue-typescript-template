import Vue from 'vue'
import VueI18n from 'vue-i18n/types/index.d'
import { RequestProxyType } from "@/utils/request/index.type"

// 注意下 这里的 types 其实是一个路径
declare module 'vue/types/vue' {
  interface Vue {
    $i18n: VueI18n
    $axios: RequestProxyType
  }
}