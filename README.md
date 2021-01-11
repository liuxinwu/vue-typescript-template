# vue-template

## 基础功能列表

- 目录结构的划分
- 环境的区分（开发、测试、生产）
- 路由自动化管理、按需加载
- 页面加载进度提示
- api 管理
- Vuex / 自定义的状态管理
- axios 的封装（重复请求取消，多个请求发送时只出现一个loading，token 失效重新刷新）
- 通用的工具函数（防抖、截流等）
- 常见指令的封装（动画指令、图片懒加载、复制指令等）
- Web Workers 的引入（开启一个线程、分担主线程的计算压力、在处理特别耗时的任务中特别有用）
- WebSocket 的嵌入（双向通讯）
- 多页面配置
- Element-ui(表格、搜索、分页组件的封装、主题、国际化等)
- git commit 提交记录的优化
- 移动、pc端的适配
- 权限的处理（按钮权限, `根据权限动态添加路由`）
- `自动化测试`
- `埋点`

*【红色部分还未完成】*

[详细文档](https://juejin.cn/post/6916304048505225223)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
