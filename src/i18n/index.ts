import Vue from "vue";
import VueI18n from "vue-i18n";

// @ts-ignore
import enLocale from "element-ui/lib/locale/lang/en";
// @ts-ignore
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
// @ts-ignore
import ElementLocale from "element-ui/lib/locale";
import en from "./lang/en";
import zh from "./lang/zh";

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    ...enLocale
  },
  zh: {
    ...zh,
    ...zhLocale
  }
};

// 设置默认语言
const i18n = new VueI18n({
  locale: "zh", 
  messages
});

ElementLocale.i18n((key: string, value: string) => i18n.t(key, value));

export default i18n;
