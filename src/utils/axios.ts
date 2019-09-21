import { VueConstructor } from 'vue';

/**
 * 将axios作为vue插件，在vue的实例上定义了两个方法axios和$http
 */
const VueAxios: Vueaxios = {
  install(Vue: VueConstructor, instance: any): void {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      return;
    }

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

export default VueAxios;
