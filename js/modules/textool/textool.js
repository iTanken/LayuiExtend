/**
 * Layui 文本输入工具组件
 * 
 * @author  iTanken
 * @since   20200310
 */
layui.define(['jquery'], function(exports) {
  var $ = layui.$, baseClassName = 'layext-text-tool', extClassName = 'layext-ele-pane',
    style = ['<style type="text/css">',
      '.', baseClassName, ' + .', extClassName, ' { position: absolute; display: block; outline: none; }', 
      '.', extClassName, ' a { text-align: center; background-color: #ffffff; cursor: pointer; overflow: hidden; }',
      '.', extClassName, ' a:active { background-color: #f2f2f2; }',
      '</style>'].join('');
  $('head link:last')[0] && $('head link:last').after(style) || $('head').append(style);

  var textool = {
    /** 默认配置选项 */
    options: {
      // 初始化回调，无参
      initEnd: $.noop,
      // 触发显示回调，参数为当前输入框和数字键盘的 jQuery 对象
      showEnd: $.noop,
      // 隐藏键盘回调，参数为当前输入框的 jQuery 对象
      hideEnd: $.noop,
      // z-index
      zIndex: 19999999
    },
    /** 初始化 */
    init: function(custom) {
      var _this = this;
      _this.options = $.extend(_this.options, custom);
      
      typeof _this.options.initEnd === 'function' && _this.options.initEnd();
    },
    /** 添加文本工具 */
    addTextool: function(_this, $input) {
      var $extPane = $input.next('.' + extClassName);
      if (!$extPane[0]) {
        // 不存在，添加元素
        
        $input.after([''].join(''));
        
        $extPane = $input.next('.' + extClassName);
        
        $extPane.on('touchstart click', 'a', function(e) {
          // 文本工具按钮点击事件
          console.log(this);

          layui.stope(e);
          return false;
        });
      }

      _this.display(_this, $input, $extPane);
    },
    /** 设置输入框值 */
    setValue: function(_this, $input, $key) {
    },
    /** 提示 */
    tips: function($input, msg) {
      return layer.tips(msg, $input, { tips: [1, '#01AAED'], time: 2e3, anim: 6, zIndex: this.options.zIndex });
    }
  };

  exports('textool', textool);
});
