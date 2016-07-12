/**
 * Created by Richard on 2016/7/12.
 */
export default {
    created () {
        this.uuid = Math.random().toString(36).substring(3, 8)
    }
}
