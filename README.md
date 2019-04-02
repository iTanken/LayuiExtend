# LayuiExtend
> 基于 LayUI 的扩展组件

## 组件列表
* [数字输入框](https://github.com/iTanken/LayuiExtend/tree/master/js/modules/numinput)


#### 用法：
[在线示例](https://itanken.github.io/LayuiExtend/)
> ``` javascript
> layui.config({
>   base: 'js/modules/'
> 	numinput: 'numinput/numinput'
> }).extend({
> }).use(['form', 'numinput'], function() {
> 	var form = layui.form, numinp = layui.numinput,;
> 	numinp.init({
>     // 123：123键置顶, 789：789键置顶
>     topBtns: 123,
>     // 右侧功能按钮
>     rightBtns: true,
>     // 监听键盘事件
>     listening: true
>   });
> });
> ```
* developing...
