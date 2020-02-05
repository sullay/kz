import moment from 'moment'
export default {
  install (Vue) {
    Vue.filter('filterTime', (val) => {
      return val ? moment(val).format('YYYY年 MM月 DD日') : ''
    })
    Vue.filter('filterName', (val) => {
      if (val.length > 1) {
        return val.split('').map((v, i) => {
          if (i === 1) {
            return '*'
          }
          return v
        }).join('')
      }
      return val
    })
  }
}
