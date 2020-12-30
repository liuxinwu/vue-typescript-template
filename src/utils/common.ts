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