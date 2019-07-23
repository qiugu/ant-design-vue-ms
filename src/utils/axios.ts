const VueAxios: Vueaxios = {
  install (Vue: any, instance: any): void {
    if (this.installed) {
      return
    }
    this.installed = true

    if (!instance) {
      return
    }

    Vue.axios = instance

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance
        }
      },
      $http: {
        get: function get() {
          return instance
        }
      }
    })
  }
}

export default VueAxios
