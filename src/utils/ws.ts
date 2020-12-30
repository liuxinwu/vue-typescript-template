import EventCenter from "./eventCenter"

type CbType = (data: object) => any

class Ws {
  // 要连接的URL
  url: string
  // 一个协议字符串或一个协议字符串数组。
  // 这些字符串用来指定子协议，这样一个服务器就可以实现多个WebSocket子协议
  protocols: string | string[]
  // WebSocket 实例
  ws: WebSocket
  // 是否在重连中
  isReconnectionLoading = false
  // 延时重连的 id
  timeId: number | undefined
  // 是否是用户手动关闭连接
  isCustomClose = false
  // 错误消息队列
  errorStack: string[] = []
  // 消息管理中心
  eventCenter = new EventCenter()

  constructor(url: string, protocols: string | string[], isReconnection = true) {
    this.url = url
    this.protocols = protocols
    this.ws = this.createWs() as WebSocket
    this.isCustomClose = !isReconnection
  }

  createWs(): WebSocket | undefined {
    if ('WebSocket' in window) {
      // 实例化
      const ws = this.ws = new WebSocket(this.url, this.protocols)
      // 监听事件
      this.onopen()
      this.onerror()
      this.onclose()
      this.onmessage()
      return ws
    } else {
      console.log('你的浏览器不支持 WebSocket')
    }
  }

  // 监听成功
  onopen() {
    this.ws.onopen = () => {
      console.log(this.ws, 'onopen')
      // 发送成功连接之前所发送失败的消息
      this.errorStack.forEach(message => {
        this.send(message)
      })
      this.errorStack = []
      this.isReconnectionLoading = false
    }
  }

  // 监听错误
  onerror() {
    this.ws.onerror = (err) => {
      console.log(err, 'onerror')
      // 用户手动关闭的不重连
      if (this.isCustomClose) return
      this.reconnection()
      this.isReconnectionLoading = false
    }
  }

  // 监听关闭
  onclose() {
    this.ws.onclose = () => {
      console.log('onclose')

      // 用户手动关闭的不重连
      if (this.isCustomClose) return

      this.reconnection()
      this.isReconnectionLoading = false
    }
  }

  // 接收 WebSocket 消息
  async onmessage() {
    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        this.eventCenter.emit(data.type, data.data)
      } catch (error) {
        console.log(error, 'error')
      }
    }
  }

  // 重连
  reconnection() {
    // 防止重复
    if (this.isReconnectionLoading) return

    this.isReconnectionLoading = true
    clearTimeout(this.timeId)
    this.timeId = setTimeout(() => {
      this.createWs()
    }, 3000)
  }

  // 发送消息
  send(message: string) {
    // 连接失败时的处理
    if (this.ws.readyState !== 1) {
      this.errorStack.push(message)
      return
    }

    this.ws.send(message)
  }

  // 手动关闭
  close() {
    this.isCustomClose = true
    this.ws.close()
  }

  // 手动开启
  start() {
    this.isCustomClose = false
    this.reconnection()
  }

  // 订阅
  subscribe(eventName: string, cb: CbType) {
    this.eventCenter.on(eventName, cb)
  }

  // 取消订阅
  unsubscribe(eventName: string, cb: CbType) {
    this.eventCenter.off(eventName, cb)
  }

  // 销毁
  destroy() {
    this.close()
    this.ws = null as never
    this.errorStack = null as never
    this.eventCenter = null as never
  }
}

export default Ws
