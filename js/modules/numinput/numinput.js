/**
 * Layui 数字输入组件
 * 
 * @author iTanken
 * @since 20190329
 * 
 * TODO 数字键盘定位自适应
 * TODO 
 */
layui.define(['jquery'], function(exports) {
  var $ = layui.$, baseClassName = 'layui-input-number', keyClassName = 'layui-keyboard-number',
    style = [
      '<style type="text/css">',
      '.', baseClassName, ' + .', keyClassName, ' { position: absolute; display: block; border-radius: 2px; outline: none; background-color: #f2f2f2; }',
      '.', keyClassName, ' .layui-card-body { font-family: Consolas; font-size: 17px; font-weight: 600; text-align: center; background-color: #ffffff; cursor: pointer; }',
      '.', keyClassName, ' .layui-card-body:active { background-color: #f2f2f2; }',
      '',
      '</style>'
    ].join('');
  $('head link:last')[0] && $('head link:last').after(style) || $('head').append(style);

  var numberInput = {
    /** 默认配置选项 */
    options: {
      // 123：123键置顶, 789：789键置顶
      topBtns: 123,
      // 右侧功能按钮
      rightBtns: true,
      // 监听键盘事件
      listening: true
    },
    /** 初始化 */
    init: function(custom) {
      var _this = this, options = $.extend(_this.options, custom);
      $('.' + baseClassName).attr({
        "readonly": "readonly"
      }).on('focus', function(e) {
        _this.showKeyboard(_this, $(this), options);
      });
    },
    /** 显示数字键盘 */
    showKeyboard: function(_this, $input, options) {
      var $keyBoard = $input.next('.' + keyClassName);
      if ($keyBoard[0]) {
        // 已存在，直接显示
        $keyBoard.show();
      } else {
        // 不存在，添加元素
        var sizeXS = options.rightBtns ? 'xs3' : 'xs4',
          sizeZero = options.rightBtns ? 'xs6' : 'xs4',
          // 按钮 123
          btn123 = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="49 97">1</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="50 98">2</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="51 99">3</div>',
              '</div>',
            '</div>'
          ].join(''),
          // 按钮 789
          btn789 = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="55 103">7</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="56 104">8</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="57 105">9</div>',
              '</div>',
            '</div>'
          ].join(''),
          /* 退格键 */
          backspace = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="8" lay-tips="退格">',
                  '<i class="layui-icon layui-icon-return"></i>',
                '</div>',
              '</div>',
            '</div>'
          ].join(''),
          /* 增加键 */
          add = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="38 39" lay-tips="增加">',
                  '<i class="layui-icon layui-icon-up"></i>',
                '</div>',
              '</div>',
            '</div>'
          ].join(''),
          /* 减小键 */
          reduce = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="37 40" lay-tips="减小">',
                  '<i class="layui-icon layui-icon-down"></i>',
                '</div>',
              '</div>',
            '</div>'
          ].join(''),
          /* 清空键 */
          reset = [
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="-1" lay-tips="清空">',
                  '<i class="layui-icon layui-icon-refresh-1"></i>',
                '</div>',
              '</div>',
            '</div>'
          ].join('');
        
        $input.after(['<div tabindex="0" hidefocus="true" class="', keyClassName, ' layui-unselect" ', 
          'style="width:', $input.width() + 11, 'px;">',
          '<div class="layui-row layui-col-space1">',
            options.topBtns == 789 ? btn789 : btn123,
            options.rightBtns ? backspace : '',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="52 100">4</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="53 101">5</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="54 102">6</div>',
              '</div>',
            '</div>',
            options.rightBtns ? add : '',
            options.topBtns == 789 ? btn123 : btn789,
            options.rightBtns ? reduce : '',
            options.rightBtns ? '' : backspace,
            '<div class="layui-col-', sizeZero, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="48 96">0</div>',
              '</div>',
            '</div>',
            '<div class="layui-col-', sizeXS, '">',
              '<div class="layui-card">',
                '<div class="layui-card-body" data-keycode="110 190">.</div>',
              '</div>',
            '</div>',
            options.rightBtns ? reset : '',
          '</div>',
        '</div>'].join(''));
        
        $keyBoard = $input.next('.' + keyClassName);
        $keyBoard.on('touchstart click', '.layui-card-body', function(e) {
          _this.setValue(_this, $input, $(this));
          layui.stope(e);
        });
        $keyBoard.on('blur', function(e) {
          var inputVal = $input.val();
          if (inputVal.indexOf('.') === inputVal.length - 1) {
            $input.val(inputVal + '0');
          }
          // $keyBoard.hide();
          $keyBoard.remove();
        });
        options.listening && _this.initKeyListening(_this, $input, $keyBoard);
      }
      $keyBoard.focus();
    },
    /** 初始化键盘监听事件 */
    initKeyListening: function(_this, $input, $keyBoard) {
      var $key, code;
      $keyBoard.on('keydown', function(e) {
        code = e.keyCode;
        var inputNumber = parseInt($input.val()) || 0;
        if (code === 107 || e.shiftKey && code === 187) {
          // 加号切换正数
          inputNumber < 0 && _this.setValueRange(_this, $input, Math.abs(inputNumber));
        } else if (code === 109 || e.shiftKey && code === 189) {
          // 减号切换负数
          inputNumber > 0 && _this.setValueRange(_this, $input, '-' + inputNumber);
        } else {
          // 监听数字键盘
          $key = $keyBoard.find('.layui-card-body[data-keycode~=' + code + ']');
          $key[0] && $key.trigger('click').css("background-color", "#f2f2f2"), 
            $keyBoard.off('keyup').on('keyup', function(e) {
              $('.layui-card-body[data-keycode]').css("background-color", "#ffffff");
            });
        }
        return false;
      });
    },
    /** 设置值范围 */
    setValueRange: function(_this, $input, value) {
      var prec = $input.data('prec'),
        minVal = $input.attr('min') || Math.pow(-2, 63), 
        maxVal = $input.attr('max') || Math.pow(2, 63) - 1;
      console.log(minVal, maxVal, prec)
      if (!isNaN(prec)) {
        prec = Math.pow(10, prec);
        value = Math.round(value * prec) / prec;
      }
      if (value < minVal) {
        value = minVal;
        _this.tips($input, '最小值为 ' + minVal + '！');
      }
      if (value > maxVal) {
        value = maxVal;
        _this.tips($input, '最大值为 ' + maxVal + '！');
      }
      value = value < minVal ? minVal : (value > maxVal ? maxVal : value);
      
      $input.val(value);
    },
    /** 设置输入框值 */
    setValue: function(_this, $input, $key) {
      var inputVal = $.trim($input.val()), keyVal = $.trim($key.text()), 
        isDecimal = inputVal.indexOf('.') > -1;

      if ($.inArray(keyVal, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']) > -1) {
        if (keyVal === '.' && (inputVal === '' || isDecimal)) return;
        if (keyVal === '0' && inputVal.indexOf('0') === 0 && !isDecimal) return;
        
        inputVal = (keyVal !== '.' && inputVal === '0' ? '' : inputVal) + keyVal;
        _this.setValueRange(_this, $input, inputVal);
      } else {
        var step = $input.attr('step'),
          changeVal = inputVal === '' ? 0 : inputVal;
        if (isDecimal) {
          step = parseFloat(step) || 0.1;
          changeVal = parseFloat(changeVal);
        } else {
          step = parseInt(step, 10) || 1;
          changeVal = parseInt(changeVal, 10);
        }
        // right function buttons
        switch($key.data('keycode')) {
        case '38 39':
          // 增加键
          changeVal = changeVal + step;
          break;
        case '37 40':
          // 减小键
          changeVal = changeVal - step;
          break;
        case 8:
          // 退格键
          var valLength = inputVal.length;
          valLength && $input.val(inputVal.substring(0, valLength - 1));
          return;
        case -1:
          // 清空键
          $input.val('');
          return;
        }
        
        _this.setValueRange(_this, $input, changeVal);
      }
    },
    /** 提示 */
    tips: function($input, msg) {
      return layer.tips(msg, $input, { tips: 1, time: 2e3, anim: 6 });
    }
  };

  exports('numinput', numberInput);
});
