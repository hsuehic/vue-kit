/**
 * Created by Richard on 2016/6/28.
 */
import Vue from 'vue'
let reverse = function (value) {
  return value.split('').reverse().join('')
}
Vue.filter('reverse', reverse)
export default reverse
