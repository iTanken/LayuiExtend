# LayuiExtend

> 基于 LayUI 的扩展组件

## 组件列表

### 1. [数字输入框](https://github.com/iTanken/LayuiExtend/tree/master/js/modules/numinput)

[在线示例](https://itanken.github.io/LayuiExtend/)

#### 数字输入框用法

> 支持 min/max，及附加的 data-prec 用于控制小数精确度：
>  
> ``` html
> <div class="layui-form">
>   <input class="layui-input layui-input-number" min="0" max="100" data-prec="4">
> </div>
> ```

---

> ``` javascript
> layui.config({
>   base: 'js/modules/'
> }).extend({
>   numinput: 'numinput/numinput'
> }).use(['form', 'numinput'], function() {
>   var $ = layui.$, form = layui.form, numinp = layui.numinput;
>   numinp.init({
>     // 123：123键置顶, 789：789键置顶
>     topBtns: 123,
>     // 右侧功能按钮开关
>     rightBtns: true,
>     // 功能按钮提示开关
>     showTips: true,
>     // 是否监听键盘事件
>     listening: true,
>     // 批量配置默认小数精确度，默认 -1 不处理精确度，0 表示禁止输入小数
>     defaultPrec: -1,
>     // 初始化回调，无参
>     initEnd: $.noop,
>     // 触发显示回调，参数为当前输入框和数字键盘的 jQuery 对象
>     showEnd: $.noop,
>     // 隐藏键盘回调，参数为当前输入框的 jQuery 对象
>     hideEnd: $.noop,
>     // 自定义 z-index
>     zIndex: 19999999
>   });
> });
> ```

### 2. [文本工具条](https://github.com/iTanken/LayuiExtend/tree/master/js/modules/textool)

[在线示例](https://itanken.github.io/LayuiExtend/)

#### 文本工具条用法

> ``` javascript
> layui.config({
>   base: 'js/modules/'
> }).extend({
>   numinput: 'numinput/numinput'
> }).use(['form', 'numinput'], function() {
>   var $ = layui.$, form = layui.form, textool = layui.textool;
>   textool.init({
>     // 根据元素 id 值单独渲染，为空默认根据 class='layext-text-tool' 批量渲染
>     eleId: null,
>     // 批量设置输入框最大长度，可结合 eleId 单独设置最大长度
>     maxlength: -1, 
>     // 初始化回调，无参
>     initEnd: $.noop,
>     // 显示回调，参数为当前输入框和工具条面板的 jQuery 对象
>     showEnd: $.noop,
>     // 隐藏回调，参数为当前输入框和工具条面板的 jQuery 对象
>     hideEnd: $.noop,
>     // 启用指定工具模块，默认依次为字数统计、复制内容、重置内容、清空内容，按数组顺序显示
>     tools: ['count', 'copy', 'reset', 'clear'],
>     // 工具按钮提示类型，默认为 'title' 属性，可选 'laytips'，使用 layer 组件的吸附提示， 其他值不显示提示
>     tipType: 'title',
>     // 吸附提示背景颜色
>     tipColor: '#01AAED',
>     // 对齐方向，默认右对齐，可选左对齐 'left'
>     align: 'right',
>     // 工具条字体颜色
>     color: '#666666',
>     // 工具条背景颜色
>     bgColor: '#FFFFFF',
>     // 工具条边框颜色
>     borderColor: '#E6E6E6',
>     // 工具条附加样式类名
>     className: '',
>     // z-index
>     zIndex: 19891014
>   });
> });
> ```

### 3. developing ···
