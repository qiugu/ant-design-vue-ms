import Vue from 'vue'

const action = Vue.directive('action', {
  bind: function (el, binding, vnode) {
    const actionName = binding.arg
    const roles = store.getters.roles
    const permissionId = vnode.context.$route.meta.permission
    let actions = []
    roles.permissions.forEach(p => {
      if (p.permissionId !== permissionId) {
        return
      }
      actions = p.actionList
    })
    if (actions.indexOf(actionName) < 0) {
      el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
    }
  }
})

export {
  action
}