import { DirectiveOptions } from 'vue'
import store from '@/store'

const permissions: DirectiveOptions = {
  inserted(el, binding) {
    const { value, arg = '' } = binding
    const permissions = store.getters['permissionsStore/getPermissions']

    if (!(permissions[arg] || []).includes(value)) {
      el.parentNode?.removeChild(el)
    }
  }
}

export default permissions