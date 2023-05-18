import { appConstants } from "../constants/appConstants";

const apiServer = appConstants.URL_GREEN

export type configApiType = { idInstance: number, token: string, method: string }

const baseFetch = <T>(config: configApiType, body: {} | null, method: string = 'GET', params?: number): Promise<T> => {

  return new Promise((resolve, reject) => {
      try{

          const defaultHeaders = {
            'Content-Type': 'application/json'
        }

      const configs: any = {
        method: method,
        headers: {
            ...defaultHeaders
        },
    }

      let url = new URL(`${apiServer}waInstance${config.idInstance}/${config.method}/${config.token}`)

      if (params) {
        url = new URL(`${url}/${params}`)
      }

          if(body){
              configs.body = JSON.stringify(body)
          }
          
          window.fetch(url, { 
            ...configs 
          })
          .then(response => response.json())
          .then(resolve, reject)
          
      } catch(e) {
          reject(e)
      }
  })
}

const fetchGet = <T>( config: configApiType, body?: any): Promise<T> => {
  return baseFetch(config, body, 'GET')
}

const fetchPost = <T>(config: configApiType, body: any ): Promise<T> => {
  return baseFetch(config, body, "POST")
}

const fetchDelete = <T>(config: configApiType, body: any, params: any): Promise<T> => {
  return baseFetch(config, body, 'DELETE', params,)
}



export {
   fetchGet,
   fetchPost,
   fetchDelete,
}