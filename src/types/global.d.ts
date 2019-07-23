declare var describe: (mes: string, callback: () => void) => void
declare var it: (mes: string, callback: () => void) => void
declare var BMap: any

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
