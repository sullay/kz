import axios from 'axios'
const baseUrl = 'https://saas.yimibit.com/qioku/'
// const baseUrl = 'http://192.168.0.111:7000/api'

axios.defaults.baseURL = baseUrl
export default {
  baseUrl
}
