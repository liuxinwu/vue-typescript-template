class ProgressBar {
  timeId = 0;
  progress = 0;
  backgroundColor: string;
  height: number;
  progressBar!: HTMLDivElement | null;
  closeing = false;

  constructor(backgroundColor: string = "#13E810", height: number = 2) {
    this.backgroundColor = backgroundColor;
    this.height = height;
  }

  start() {
    // 频繁切换问题
    if (this.progressBar) {
      clearTimeout(this.timeId);
      this.progressBar.parentNode?.removeChild(this.progressBar);
    }

    this.generate();
  }

  close() {
    this.destory();
  }

  private generate() {
    this.progressBar = document.createElement("div");
    this.progressBar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      height: ${this.height}px;
      transition: transform .1s;
      transform: translate3d(-100%, 0, 0);
      background-color: ${this.backgroundColor};
      box-shadow: 0 0 10px ${this.backgroundColor}, 0 0 5px ${this.backgroundColor};
    `;
    document.body.appendChild(this.progressBar);
    this.continue();
  }

  private continue() {
    if (window.requestAnimationFrame !== undefined) {
      window.requestAnimationFrame(() => {
        if (this.closeing) return;

        this.progress +=
          this.progress > 30 && this.progress < 70 ? Math.random() * 10 + 1.5 : .5;

        if (this.progress < 90 && this.progressBar) {
          this.progressBar.style.transform = `translate3d(-${100 -
            this.progress}%, 0, 0)`;
          this.continue();
        }
      });
    }
  }

  private destory() {
    clearTimeout(this.timeId);
    this.timeId = setTimeout(() => {
      this.closeing = true;
      this.progressBar!.style.transform = `translate3d(0, 0, 0)`;
      setTimeout(() => {
        this.progress = 0;
        this.progressBar!.parentNode?.removeChild(this.progressBar!);
        this.closeing = false;
        this.progressBar = null;
      }, 300);
    }, 500);
  }
}

export default ProgressBar;
