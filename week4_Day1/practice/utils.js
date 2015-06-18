/**
 * Created by caoyangkaka on 6/18/15.
 */
utils = {};
utils.getCss = function(ele, attr) {
    try {
        // notice here, the getComputedSyle is the attribute of window, please
        return parseFloat(window.getComputedStyle(ele, null)[attr]);
    } catch(e) {
        return parseFloat(ele.currentStyle[attr]);
    }
}