/**
 * Created by xuexiaowei on 2016/11/6.
 */
/**
 * 创建
 * @param path
 * @returns {function(*=)}
 */
const makeComponent = (path) => {
  return (resolve) => {
    require([path], resolve)
  }
}

export default makeComponent
