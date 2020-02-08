import axios from '../../plugins/axios'
const getHashList = (options) => axios.get('/mask/order/chain/list', { params: options })
export default {
  getHashList
}
