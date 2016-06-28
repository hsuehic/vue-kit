/**
 * Created by Richard on 2016/6/28.
 */

import Vue from 'vue'
const wrap = (value, start, end) => start + value + end
Vue.filter('wrap', wrap)
export default wrap
