* dom0 -> refer to the original dom, like document.forms, document.images
* dom1 -> refer to the dom, like document.getElementById
* dom2 事件 -> the dom0 has some drawbacks, like it will overload the function if we use the on-type event
              不可以灵活的绑定和卸载，只能在内部进行修改
              内部放入函数容易改变内部的this，要进行优化
              因此我们引入了dom2事件，addEventListener, removeEventListener, for standard
              dom2 的相关方法定义了在 EventTarget类上面
* dom2的相关的方法：
    oDiv.addEventListener(type, fn, boolean), indicate it is bubble or capture phase
    type type here is only 'click', no 'on' in the front
    同一个方程不能同时绑定，第一次绑定的有效
    增加了一些新的事件，这些事件只能用dom2来实现，并且都是以`DOM`开头，例如 `DOMContentLoaded`，

* ie6~8:
    oDiv.attachEvent(), attachEvent("on" + type, fn); only bubble phase. no capture phase
    in ie6~8, typeof oDiv.attachEvent == object

    ```js
     function bind(ele, type, fn) {
            if (ele.addEventListener) {
                ele.addEventListener(type, fn, false);
            } else if (ele.attachEvent) {
                ele.attachEvent('on' + type, fn);
            } else {
                // such old browser
            }
        }
        function unbind(ele, type, fn) {
            if (ele.removeEventListener) {
                ele.removeEventListener(type, fn, false);
            } else if (ele.detachEvent) {
                ele.detachEvent('on' + type, fn);
            } else {
                // such old browser
            }
        }
    ```

    in ie6~8, the attachEvent issue, 1. firstly, the order of the binded function will be in a  乱序中。
                                     2. 通过一个fn多次绑定是可以的
                                     3. this不指向被绑定的dom元素，而是指向了window

* 解决ie6~8的事件问题
* 事件兼容性问题总结
    1. DOM2事件的绑定：方法会有不同
    2. DOM2事件的绑定：IE里面被绑定的方法this指向window
    3. DOM2事件的绑定：IE里面的顺序是乱序
    4. DOM2事件的绑定：IE里面的事件是可以重复绑定的
    5. 事件对象本身：IE是全局的事件对象window.event,其他的是自动传入， var e = arguments[0] || window.event;
    6. 事件源： 标准浏览器是e.target, IE是event.srcElement; var target = e.target || e.srcElement;
    7. 阻止事件默认行为： 标准浏览器：e.preventDefault(); ie: e.returnValue = false;
    8. 阻止事件传播： 标准浏览器： e.stopPropagation(); ie: e.cancelBubble = true;
    9. 
