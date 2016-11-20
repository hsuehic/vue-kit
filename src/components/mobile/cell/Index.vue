<template>
  <div class="container">
    <div class="cell">
      <div class="hd">
        <h1 class="page-title">Cell</h1>
      </div>
      <div class="bd">
        <div class="weui-cells_title">带说明的列表项</div>
        <div class="weui-cells">
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <p>标题文字</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </div>
        </div>
        <div class="weui-cells_title">带图标、说明的列表项</div>
        <div class="weui-cells">
          <div class="weui-cell">
            <div class="weui-cell_hd"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>标题文字</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_hd"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>标题文字</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </div>
        </div>

        <div class="weui-cells_title">带跳转的列表项</div>
        <div class="weui-cells weui-cells_access">
          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">
            </div>
          </a>
          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">
            </div>
          </a>
        </div>

        <div class="weui-cells_title">带说明、跳转的列表项</div>
        <div class="weui-cells weui-cells_access">
          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </a>
          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </a>

        </div>

        <div class="weui-cells_title">带图标、说明、跳转的列表项</div>
        <div class="weui-cells weui-cells_access">

          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_hd"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </a>
          <a class="weui-cell" href="javascript:;">
            <div class="weui-cell_hd"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">说明文字</div>
          </a>
        </div>

        <div class="weui-cells_title">单选列表项</div>
        <div class="weui-cells weui-cells_radio">
          <label class="weui-cell weui-check_label" for="x11">
            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">
              <input type="radio" class="weui-check" name="radio1" id="x11">
              <span class="weui-icon_checked"></span>
            </div>
          </label>
          <label class="weui-cell weui-check_label" for="x12">

            <div class="weui-cell_bd weui-cell_primary">
              <p>cell standard</p>
            </div>
            <div class="weui-cell_ft">
              <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked">
              <span class="weui-icon_checked"></span>
            </div>
          </label>
        </div>
        <div class="weui-cells_title">复选列表项</div>
        <div class="weui-cells weui-cells_checkbox">
          <label class="weui-cell weui-check_label" for="s11">
            <div class="weui-cell_hd">
              <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
              <i class="weui-icon_checked"></i>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>standard is dealt for u.</p>
            </div>
          </label>
          <label class="weui-cell weui-check_label" for="s12">
            <div class="weui-cell_hd">
              <input type="checkbox" name="checkbox1" class="weui-check" id="s12">
              <i class="weui-icon_checked"></i>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <p>standard is dealicient for u.</p>
            </div>
          </label>
        </div>

        <div class="weui-cells_title">开关</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell_bd weui-cell_primary">标题文字</div>
            <div class="weui-cell_ft">
              <input class="weui-switch" type="checkbox" checked>
            </div>
          </div>
        </div>

        <div class="weui-cells_title">表单</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell_hd"><label class="weui-label">qq</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号">
            </div>
          </div>
          <div class="weui-cell weui-vcode">
            <div class="weui-cell_hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" placeholder="请输入验证码">
            </div>
            <div class="weui-cell_ft">
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_hd"><label class="weui-label">银行卡</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入银行卡号">
            </div>
          </div>
          <div class="weui-cell weui-vcode weui-cell_warn">
            <div class="weui-cell_hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" placeholder="请输入验证码">
            </div>
            <div class="weui-cell_ft">
              <i class="weui-icon_warn"></i>
            </div>
          </div>
        </div>
        <div class="weui-cells_tips">底部说明文字底部说明文字</div>
        <div class="weui-btn_area">
          <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
        </div>

        <div class="weui-cells_title">上传</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <div class="weui-uploader">
                <div class="weui-uploader_hd weui-cell">
                  <div class="weui-cell_bd weui-cell_primary">图片上传</div>
                  <div class="weui-cell_ft">0/2</div>
                </div>
                <div class="weui-uploader_bd">
                  <ul class="weui-uploader_files">
                    <li class="weui-uploader_file"
                        style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                    <li class="weui-uploader_file"
                        style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                    <li class="weui-uploader_file"
                        style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                    <li class="weui-uploader_file weui-uploader_status"
                        style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                      <div class="weui-uploader_status_content">
                        <i class="weui-icon_warn"></i>
                      </div>
                    </li>
                    <li class="weui-uploader_file weui-uploader_status"
                        style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                      <div class="weui-uploader_status_content">50%</div>
                    </li>
                  </ul>
                  <div class="weui-uploader_input_box">
                    <input class="weui-uploader_input" type="file" accept="image/*" multiple="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="weui-cells_title">文本域</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <textarea class="weui-textarea" placeholder="请输入评论" rows="3"></textarea>
              <div class="weui-textarea_counter"><span>0</span>/200</div>
            </div>
          </div>
        </div>
        <div class="weui-toptips weui-warn js_tooltips">格式不对</div>
        <div class="weui-cells_title">表单报错</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_warn">
            <div class="weui-cell_hd"><label for="" class="weui-label">卡号</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入卡号">
            </div>
            <div class="weui-cell_ft">
              <i class="weui-icon_warn"></i>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_hd"><label for="" class="weui-label">日期</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="date" value="">
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_hd"><label for="" class="weui-label">时间</label></div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="datetime-local" value="" placeholder="">
            </div>
          </div>
        </div>
        <div class="weui-cells_title">选择</div>
        <div class="weui-cells">

          <div class="weui-cell weui-cell_select weui-cell_select-before">
            <div class="weui-cell_hd">
              <select class="weui-select" name="select2">
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
              </select>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码">
            </div>
          </div>
        </div>
        <div class="weui-cells_title">选择</div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_select">
            <div class="weui-cell_bd weui-cell_primary">
              <select class="weui-select" name="select1">
                <option selected="" value="1">微信号</option>
                <option value="2">QQ号</option>
                <option value="3">Email</option>
              </select>
            </div>
          </div>
          <div class="weui-cell weui-cell_select weui-select_after">
            <div class="weui-cell_hd">
              <label for="" class="weui-label">国家/地区</label>
            </div>
            <div class="weui-cell_bd weui-cell_primary">
              <select class="weui-select" name="select2">
                <option value="1">中国</option>
                <option value="2">美国</option>
                <option value="3">英国</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  body {
    background-color: #fbf9fe;
  }
  .container>div {
    background-color: #fbf9fe;
  }
  .cell .bd {
    padding-bottom: 30px;
  }
  .weui-select_after {
    padding-left: 15px;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
