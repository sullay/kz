import api from '../../service'
const actions = {
  async getHashList ({ commit }, { pageNum = 1, pageSize = 50 }) {
    const result = await api.tip.getHashList({ pageNum, pageSize })
    return result
  }
}

export default {
  actions
}
