/**
 * Created by Richard on 2016/7/6.
 */
(function () {
  function install(Vue){
    Vue.element = function (tag, options){
      var p = Object.create(HTMLElement.prototype)
      p.attachedCallback = options.attached
      p.detachedCallback = options.detached

      options.attached = null
      options.detached = null
      var props = options.props || options.paramAttributes || []
      var propHash = Object.create(null)

      props.forEach(function (name){
        propHash[name] = true
        Object.defineProperty(p, name, {
          get: function () {
            return this.__vue__[name]
          },
          set: function (val) {
            this.setAttribute(name, val)
          }
        })
      })

      p.attributeChangedCallback = function (name, oldVal, newVal){
        if(propHash[name]) {
          this.__vue__[name] = newVal
        }
      }

      var VM = Vue.extend(options);
      p.createdCallback = function () {
        var vm = new VM({
          el: this
        })
        if(options.shadow){
          var shadow = this.createShadowRoot()
          while (this.firstChild) {
            shadow.appendChild(this.firstChild)
          }
        }
      }
      //register element
      document.registerElement(tag, {
        prototype: p
      })
    }
  }
  if(typeof exports == 'object'){
    module.exports = install
  }else if(typeof define == 'function' && define.amd){
    define([],function (){
      return install()
    })
  }else if(window.Vue){
    Vue.use(install)
  }
})()
