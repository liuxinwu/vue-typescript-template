// 禁止表情及特殊字符

interface InpType extends HTMLElement {
  handle: () => void
}
interface ElType extends HTMLElement {
  $inp: InpType
}

const findEle = (parent: HTMLElement, type: string): any => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el: HTMLElement, type: string) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const emoji = {
  bind: function (el: ElType) {
    // 正则规则可根据需求自定义
    const regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g
    const $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      const val = $inp.value
      $inp.value = val.replace(regRule, '')

      // 手动触发 input 事件
      // 从而触发响应式（Vue）
      trigger($inp, 'input')
    }
    $inp.addEventListener('keyup', $inp.handle)
  },
  unbind: function (el: ElType) {
    el.$inp.removeEventListener('keyup', el.$inp.handle)
  },
}

export default emoji