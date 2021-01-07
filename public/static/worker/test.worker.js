let count = 0
const startTime = Date.now()
for (let i = 0; i < 1000 * 1000 * 1000; i++) {
  count++
}
const time = `${(Date.now() - startTime) / 1000}s`

postMessage({
  count,
  time
})