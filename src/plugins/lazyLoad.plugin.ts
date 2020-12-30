//  图片懒加载

import { VueConstructor } from "vue";

const LazyLoad = {
  // install方法
  install(Vue: VueConstructor, options: any) {
    const defaultSrc = options.default
    Vue.directive('lazyLoad', {
      bind(el: any, binding: any) {
        LazyLoad.init(el, binding.value, defaultSrc)
      },
      inserted(el: any) {
        if (IntersectionObserver) {
          LazyLoad.observe(el)
        } else {
          LazyLoad.listenerScroll(el)
        }
      },
    })
  },
  // 初始化
  init(el: HTMLImageElement, val: string, def: string) {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
  },
  // 利用IntersectionObserver监听el
  observe(el: HTMLImageElement) {
    const io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  // 监听scroll事件
  listenerScroll(el: HTMLImageElement) {
    const handler = LazyLoad.throttle(LazyLoad.load, 300)
    LazyLoad.load(el)
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  // 加载真实图片
  load(el: HTMLImageElement) {
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  // 节流
  throttle(fn: Function, delay: number) {
    let timer: number
    let prevTime: number
    return function (...args: any[]) {
      const currTime = Date.now()
      // const context = this as any
      if (!prevTime) prevTime = currTime
      clearTimeout(timer)

      if (currTime - prevTime > delay) {
        prevTime = currTime
        // eslint-disable-next-line prefer-spread
        fn.apply(null, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(() => {
        prevTime = Date.now()
        timer = null as unknown as number
        // eslint-disable-next-line prefer-spread
        fn.apply(null, args)
      }, delay)
    }
  },
}

export default LazyLoad