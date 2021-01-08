console.log(process.env.VUE_APP_REQUEST_URL);

const autoprefixer = require('autoprefixer');
// const pxtorem = require("postcss-pxtorem");
const pxtoViewPort = require("postcss-px-to-viewport");

module.exports = {
  runtimeCompiler: true,

  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    before: require("./src/mock")
  },

  pages: {
    index: {
      // page 的入口
      entry: 'src/views/default-page/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue-typescript-template',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/other.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `other.html`。
    other: 'src/views/other-page/main.ts'
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          
          // px -> rem
          // pxtorem({
          //   rootValue: 75,
          //   propList: ['*']
          // }),

          // px -> vw, vh, vmin, vmax
          // pxtoViewPort({
          //   unitToConvert: 'px',
          //   viewportWidth: 1920,
          //   unitPrecision: 5,
          //   propList: ['*'],
          //   viewportUnit: 'vw',
          //   fontViewportUnit: 'vw',
          //   selectorBlackList: ["el-"],
          //   minPixelValue: 1,
          //   mediaQuery: false,
          //   replace: true,
          //   exclude: /(\/|\\)(node_modules)(\/|\\)/,
          //   landscape: false
          // })
        ]
      },
      
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/assets/styles/common.scss";`
      },
    }
  },

  // chainWebpack(config) {
  //   config
  //     .plugin("html")
  //     .tap(args => {
  //       args[0].title = "vue-template";
  //       return args;
  //     });
  // }
}


