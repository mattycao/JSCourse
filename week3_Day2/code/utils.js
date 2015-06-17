/**
 * Created by caoyangkaka on 6/16/15.
 */
utils = {};
utils.offset = function(elem) {
    var parent = elem.offsetParent;
    var left = elem.offsetLeft;
    var top = elem.offsetTop;
    while(parent) {
        if(window.navigator.userAgent.indexOf('MSIE 8.0') > -1) {
            left += parent.offsetLeft;
            top += parent.offsetTop;
        } else {
            left += parent.offsetLeft + parent.clientLeft;
            top += parent.offsetTop + parent.clientTop;
        }
        parent = parent.offsetParent;
    }
    return {
        top: top,
        left: left
    }
}