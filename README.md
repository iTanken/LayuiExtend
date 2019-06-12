# LayuiExtend

> 基于 LayUI 的扩展组件

## 组件列表

### 1. [数字输入框](https://github.com/iTanken/LayuiExtend/tree/master/js/modules/numinput)

#### 用法：

[在线示例](https://itanken.github.io/LayuiExtend/)
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
>   var $ = layui.$, form = layui.form, numinp = layui.numinput,;
>   numinp.init({
>     // 123：123键置顶, 789：789键置顶
>     topBtns: 123,
>     // 右侧功能按钮
>     rightBtns: true,
>     // 监听键盘事件
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

### 2. developing ···
