import VueRouter from 'vue-router'
import store from '@/store'

export default function gloablHook(router: VueRouter) {
  router
    .beforeEach((to, from, next) => {
      const { fullPath, meta: { isLogin = false } = {} } = to
      const token = store.getters['userStore/getToken']

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
}