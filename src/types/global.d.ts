declare var BMap: any
declare var axios: any
declare var VueRouter: any
declare var Vuex: any

declare namespace Ajax {
  export interface AjaxResponse {
    resultData: any
    status: number
    resultMsg?: string
  }
  export interface AxiosResponse {
    data: AjaxResponse
  }
}
