/* eslint-disable */
import route from './_connection'

export default {
  _Register(service,method,params,secretKey) {
    return route().post('/api', {service: service, method: method, params: params, secretKey: secretKey})
  }
}