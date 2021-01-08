import VueRouter from 'vue-router'
import store from '@/store'
import ProgressBar from "@/utils/progressBar"

const progressBar = new ProgressBar()

export default function gloablHook(router: VueRouter) {
  router
    .beforeEach((to, from, next) => {
      const { fullPath, meta: { isLogin = false } = {} } = to
      const token = store.getters['userStore/getToken']

      progressBar.start()
      if (token && to.path === '/login') {
        return next('/')
      }

      if (isLogin && !token) {
        return router.replace({
          name: 'Login',
          query: {
            redirectUrl: fullPath
          }
        })
      }
      next()
    })

  
  router.afterEach(() => {
    progressBar.close()
  })
}