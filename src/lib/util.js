/**
 * 提供与DOM操作无关的工具方法
 * @type {{createUUID: util.createUUID}}
 */
let util = {
    /**
     * 创建 UUID标识字符串
     * @returns {string}
     */
    createUUID: function () {
        return Math.random().toString(36).substring(3, 8)
    }
}

/**
 * DOM 操作相关的工具方法
 * @type {{getMaxZIndex: dom.getMaxZIndex}}
 */
let dom = {
    /**
     * 获取容器中，所有子元素style属性的zIndex最大值
     * @param {HTMLElement} container
     * @returns {number}
     */
    getMaxZIndex: function (container) {
        let v = 0
        let children = container.children
        children.every(function (ele, index, arr) {
            if (ele.style.zIndex && ele.style.zIndex > v) {
                v = ele.style.zIndex
            }
            return true
        })
        return v
    }
}

export {util, dom}
