// 有关 Dom 操作的工具函数


export const hasClass = (el: HTMLElement, className: string): boolean => {
  if (!className) return false

  return el.className.includes(className)
}

/**
 * 给元素添加类名
 * @param el 元素
 * @param className 类名
 */
export const addClass = (el: HTMLElement, className: string): void => {
  if (!className) return
  if (hasClass(el, className)) return

  el.className += ` ${className}`
}

/**
 * 给元素移除类名
 * @param el 元素
 * @param className 类名
 */
export const removeClass = (el: HTMLElement, className: string): void => {
  if (!className) return
  if (!hasClass(el, className)) return

  el.className = el.className.replace(className, '').trim()
}
