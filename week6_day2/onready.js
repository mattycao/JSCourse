/**
 * Created by caoyangkaka on 1/13/16.
 */
var ready = function(cb) {
    if(window.addEventListener) {
        window.addEventListener('DOMContentLoaded', function() {
            cb();
        }, false);
    } else {
        // 只要有readystate属性,一般就有onreadystatechange 事件
        document.attachEvent('readystatechange', function() {
            if(document.readyState === 'interactive') {
                // loaded
                callback();
            }
        })
    }
}