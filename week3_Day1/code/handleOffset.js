/**
 * Created by caoyangkaka on 6/16/15.
 */
// try to get any element offset data
// in ie8, we don't need add the clientLeft, means the border
function offset(ele) {
    var p = ele.offsetParent;
    var l = ele.offsetLeft;
    var t = ele.offsetTop;
    while (p) {
        if (window.navigator.userAgent.indexOf('MSIE 8.0') > -1) {
            l += p.offsetLeft;
            t += p.offsetTop;
        } else {
            l += p.offsetLeft + p.clientLeft;
            t += p.offsetTop + p.clientTop;
        }
        p = p.offsetParent;
    }
    return {
        top: t,
        left: l
    }
}