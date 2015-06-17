/**
 * Created by caoyangkaka on 6/16/15.
 */
// The way we can get the css value from js
// method One
elem.style.width; // here, we can only get the inline style

// method Two
//window.getComputedStyle(element[, pseudoElt]);
// This one is very useful, which will get all computed style in one time, however, it has compatibility issues like, in ie6~8
elem.currentStyle
// This one is used in ie6~8, however, it has some unit issues, like the color, px, might has different unit. So we better normalize it before we use it.

//example
var oDiv = document.getElementById('div1');
console.log(oDiv.style.width); // inline style
console.log(window.getComputedStyle(oDiv, null)['margin']);
console.log(oDiv.currentStyle['margin']);

// Thus, we can get a method to get the css value from an element
function getCss(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}