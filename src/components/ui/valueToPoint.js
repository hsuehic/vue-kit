/**
 * Created by Richard on 2016/6/30.
 */
export default (value, index, total) => {
  var x = 0
  var y = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos = Math.cos(angle)
  var sin = Math.sin(angle)
  var tx = x * cos - y * sin + 100
  var ty = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}
