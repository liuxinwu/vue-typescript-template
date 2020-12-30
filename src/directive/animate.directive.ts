// 结合 animate.css 的自定义动画指令

import "animate.css"
import { DirectiveBinding } from "vue/types/options"
import { addClass, removeClass } from "@/utils/dom"
import { theThrottle } from "@/utils/common"

const animate = {
  el: document.createElement('custom'),
  className: '',
  intersectionObserver: new IntersectionObserver(() => { console.log('') }),

  bind(el: HTMLElement, binding: DirectiveBinding) {
    addClass(el, "animate__animated");
    animate.init(el, binding.value);
  },

  unbind() {
    if (IntersectionObserver) {
      animate.intersectionObserver.unobserve(animate.el)
    } else {
      window.removeEventListener("scroll", animate.handleScroll)
    }
    
  },

  init(el: HTMLElement, className: string) {
    animate.el = el
    animate.className = className
    animate.observe()
  },

  observe() {
    const { el, className } = animate
    if (IntersectionObserver) {
      const intersectionObserver = animate.intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          addClass(el, className)
        } else {
          removeClass(el, className)
        }
      })

      // 延迟监听是为了 el 插入到了页面
      setTimeout(() => {
        intersectionObserver.observe(el)
      })
    } else {
      window.addEventListener("scroll", animate.handleScroll)
    }
  },

  handleScroll: theThrottle(() => {
    const { el, className } = animate
    const ElClientRects = animate.el.getClientRects()[0]

    if (ElClientRects.top >= 0) {
      addClass(el, className)
    } else {
      removeClass(el, className)
    }
  }, 50)
}

export default animate
