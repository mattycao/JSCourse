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

* event冒泡和捕获是事件的两个阶段
* dom2 ： addEventListener(type, fn, false), -> indicate the bubble, if true, will capture
* e.target || e.srcTarget,  indicate the real element which happens the event
* event.currentTarget: Identifies the current target for the event, as the event traverses the DOM. 
* 事件委托: 利用了事件传播，如果动态的创建了元素，用事件委托就自动的给据了监听
* IE兼容的DOM2级事件绑定
```js
function bind(ele, type, fn) {
        if (ele.addEventListener) {
            ele.addEventListener(type, fn, false);
        } else {
            ele.attachEvent("on" + type, fn);
        }
    }
```

### For more info:
1. For dom 0 binding, the function will has a parameter, e. Under IE it is the window.event. So
```js
e = e || window.event;
```
2. e.clientX, e.clientY, all browser support it. The distance from the viewport.
3. e.pageX, e.pageY, only standard browser supports. The distance from the page view.
4. e.target || e.srcElement, the source element
5. e.type, e.keyCode
6. IE 8, only has the bubble broadcasting
7. For DOM 0, we can use the return false to prevent the default behavior.
8. For firefox, only has the DOM2, which we has to use the `e.preventDefault = true`
9. some event will not broadcasting, like onfocus, onblur, onmouseenter, onmouseleave
10. Event compatibility: DOM2 IE some problem
    1. event object: IE is the window.event
    2. e.stopPropagation method. IE is `e.cancelBubble = true`
    3. stop the default behavior: DOM 0: return false, DOM2: e.preventDefault = true; for IE is e.returnValue = true;
    4. event source: e.target, for ie: e.srcElement
    5. e.pageX, e.pageY, IE doesn't support.
    6. DOM 2: e.addEventListener, for IE: e.attachEvent
    7. For attachEvent: this is different one, the processing order is totally messed.
    8. For IE678, if the binding function is less than 9, then the processing order is reversed. If larger than 9, then it will process in mess.


11. onmouseover, onmouseenter: are pretty the same, but the enter one will ovoid the trouble from the over:
    1. if go from the parent to child, will not trigger the event.
    2. if go from the child to parent, will also not trigger the event.
    3. 图片放大镜就是用enter来实现

12. mouseenter: 如果是给后代元素传播来的事件不算. 如果此事件发生时是由后代元素中离开,而触发的当前这些元素的鼠标事件,也不算
13. e.relatedTarget: 定义在标准浏览器中,是指触发的当前这些元素的鼠标事件,从那个元素上离开. 所以对于mouseenter的定义是:  
如果他的relatedTarget不是他自己,也不是他的后代元素,在这种情况下,则是mouseneter事件
14. About using the HTML event binding, since we define a new function, and then using the Literal function to define a function, so this keyword will change.
so, if we want to use the this keyword refer to the e.srcElement || e.target, we better use the call or just just the srcElement.
15. 对于HTML中的事件绑定, 一定要传入event实参,这样子才可以用到event
### Red Book
1. event flow:
    1. event bubble: from the specific one to the document, for IE
    2. event capturing:  In DOM2 regular, it rules that it will broadcast from the document, but some broswer will come from window.
3. three state of DOM2: event capture, in the target, event bubble
4. Using the HTML to handle the event is not a good way to do. Page 349
5. DOM2, the boolean indicates that the true means the event capturing process, false means the event bubble process.
6. the event object: the two attributes: currentTarget, the target. Notice the differences.
7. For IE, event = window.event, it only happens in DOM 0 and DOM2. event parameters only happens in DOM2
8. Only when you in the target stage, this keyword is equal to the target, currenttarget
9. For IE, using the e.cancelBubble =true, will only stop the bubble broadcasting. But the stopPropagation() will stop both.