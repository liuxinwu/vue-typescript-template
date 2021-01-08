class ProgressBar {
  timeId = null
  progress = 0
  backgroundColor: string
  height: number
  progressBar!: HTMLDivElement | null
  closeing = false

  constructor(backgroundColor: string = "#29d", height: number = 2) {
    this.backgroundColor = backgroundColor
    this.height = height
  }

  start() {
    this.generate()
  }

  close() {
    this.closeing = true
    this.progressBar!.style.transform = `translate3d(${this.progress}%, 0, 0)`
    this.destory()
  }

  private generate() {
    this.progressBar = document.createElement('div')
    this.progressBar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 9999;
      height: ${this.height}px;
      transition: transform .1s;
      transform: translate3d(-100%, 0, 0);
      background-color: ${this.backgroundColor};
      box-shadow: 0 0 10px ${this.backgroundColor}, 0 0 5px ${this.backgroundColor};
    `
    document.body.appendChild(this.progressBar)
    this.continue()
  }

  private continue() {
    if (window.requestAnimationFrame !== undefined) {
      window.requestAnimationFrame(() => {
        if (this.closeing) return

        this.progress += Math.random() * 10 + 50

        if (this.progress < 90 && this.progressBar) {
          console.log(this.progress, 'this.progress')
          this.progressBar.style.transform = `translate3d(-${100 - this.progress}%, 0, 0)`
          this.continue()
        }
      })
    }
  }

  private destory() {
    setTimeout(() => {
      this.progress = 0
      this.progressBar!.parentNode?.removeChild(this.progressBar!)
      this.closeing = false
      this.progressBar = null
    }, 300)
  }
}

export default ProgressBar