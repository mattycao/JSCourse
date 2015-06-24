* 事件是什么？
    * 就是一件儿事儿 包括硬件的一些行为
    * 事件绑定： 事件监听
    * 事件对象？得到一些事件系统的反馈的一些东西，把自己感知到的一些东西保存下来~
    * 实现事件系统， 事件的机制： 浏览器自己有一套机制
* 问题，什么是事件，什么是事件绑定，具体一个事件和事件整体的区别，什么是事件对象

* 事件对象：
* e.clientX, e.clientY: refer to the x, y position of mouse in the browser
* window.event, // the event object under ie, it is a global event
* 为了兼容，我们如此，写入

```js
ev = ev || window.event;
```
Notice in chrome, the ev and window.event are both exists.

* ev.type: the type of event, like mouseover, it is real time attribute
* pageX, pageY: refer to the whole page, clientX, clientY: refer to the browser window. (notice, the pageX and pageY is not support under IE)

* 和onmouseover事件相对应的另一组事件是：onmouseenter
   * 什么时候算是mouseenter:如果是后代元素传播来的事件不算
   * 如果此事件发生时，是由后代元素中离开，而触发的当前这些元素的鼠标事件，也不算(从父元素到子元素，不会触发mouseenter，从子元素到父元素，也不会出发mouseenter)
* e.relatedTarget//标准浏览支持的事件属性，指触发当前事件之后，从那个元素上离开的。
* 如果它的e.relatedTarget不是它自己，也不是它的后代元素，在这种情况下，则是mouseenter事件
* mouseover--mouseout,mouseenter---mouseleave
* 阻止浏览器的事件传播的方法：
    * e.stopPropagation(); // under standard browser
    * e.cancelBubble = true; // ie6~8
```js
if(e.stopPropagation) {
    e.stopPropagation();
    }else {
    e.cancelBubble = true;
    }
}
```