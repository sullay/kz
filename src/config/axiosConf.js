import axios from 'axios'
const baseUrl = 'http://saas.yimibit.com:8080/'
// const baseUrl = 'http://192.168.0.111:7000/api'

axios.defaults.baseURL = baseUrl
export default {
  baseUrl
}
