/**
 * Created by Richard on 2016/7/12.
 */

/**
 * @description 提供uuid生成的方法
 */
export default {
    /**
     * 生成一个uuid
     */
    created () {
        this.uuid = Math.random().toString(36).substring(3, 8)
    }
}
