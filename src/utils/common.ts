// 通用的 js 函数

/**
 * 防抖函数
 * @param cb 回调函数
 * @param time 延迟时间
 */
export const imageStabilization = (cb: Function, delay = 300) => {
  let timeId: number

  return () => {
    if (timeId) clearTimeout(timeId)

    timeId = setTimeout(() => {
      cb()
    }, delay)
  }
}

/**
 * 节流函数
 * @param cb 回调函数
 * @param time 延迟时间
 */
export const theThrottle = (cb: Function, delay = 300) => {
  let preDate = new Date().getTime()

  return () => {
    const nowDate = new Date().getTime()
    if (nowDate - preDate > delay) {
      cb()
      preDate = nowDate
    }
  }
}

/**
 * 判断是否是一个对象
 * @param query 需要进行判断的参数
 * @return {boolean}
 */
export function isObject(query: any): boolean {
  return Object.prototype.toString.call(query) === '[object Object]'
}

/**
 * 将一个对象转换成路由参数
 * @param query 
 * @return {string}
 */
export function outputUrl(query: { [index: string]: string | number }) {
  if (!isObject(query)) {
    return console.warn('query 必须是一个 Object')
  }

  let url = ''

  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      url += `&${key}=${encodeURIComponent(query[key])}`
    }
  }

  return url.slice(1)
}