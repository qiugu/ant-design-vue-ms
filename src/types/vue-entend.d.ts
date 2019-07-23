import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $ctx: string,
    $http: any,
    [propName: string]: any
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    ls: any
  }
}
