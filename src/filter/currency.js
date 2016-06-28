/**
 * Created by Richard on 2016/6/28.
 */
/** eslint disabled **/

import Vue from 'vue'

Vue.filter('currency', {
  read: (val) => {
    return '$' + val.toFixed(2)
  },
  write: (val, oldVal) => {
    var number = val.replace(/[^\d.]/g, '')
    return isNaN(parseFloat(number)) ? 0 : parseFloat(number)
  }
})
