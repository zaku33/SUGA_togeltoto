/* eslint-disable */
import route from './_connection'

export default {
  uLogin(service,method,params,secretKey) {
    return route().post('/api', {service: service, method: method, params: params, secretKey: secretKey})
  }
}