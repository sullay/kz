import axiosConfig from './axiosConf'

export default {
  install (Vue, options) {
    Vue.prototype.BaseUrl = axiosConfig.baseUrl
  }
}
