/**
 * Created by Richard on 2016/6/28.
 */
import Vue from 'vue'

Vue.directive('demo', {
    bind: () => {
        console.log('demo bind')
    },
    update: function (value) {
        this.el.innerHTML = '' +
            'name - ' + this.name + '<br />' +
            'expression - ' + this.expression + '<br />' +
            'argument -' + this.arg + '<br />' +
            'modifiers - ' + JSON.stringify(this.modifiers) + '<br />' +
            'value -' + value
    },
    unbind: () => {
        console.log('demo unbind')
    }
})
