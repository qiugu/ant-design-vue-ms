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
