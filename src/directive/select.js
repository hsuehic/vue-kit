/**
 * Created by Richard on 2016/7/1.
 */
import Vue from 'vue'
import $ from 'jquery'
import 'select2'

Vue.directive('select', {
  twoWay: true,
  priority: 1000,
  params: ['options'],
  bind: function () {
    var self = this
    $(this.el).select2({
      data: this.params.options
    }).on('change', function () {
      self.set(this.value)
    })
  },
  update: function (value) {
    $(this.el).val(value).trigger('change')
  },
  unbind: function () {
    $(this.el).off().select2('destroy')
  }
})
