/**
 * Created by caoyangkaka on 11/28/15.
 * A simple way of showing the closing of JQuery library.
 *
 */
;(function() {
    "use strict";
    var JQuery = {};
    function sum() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            if(!isNaN(arguments[i])) {
                total += Number(arguments[i]);
            }
        }
        return total;
    }
    JQuery.sum = sum;

    // Here, we will give the dollar sign to JQuery.
    window.JQuery = JQuery;
    window.$ = window.JQuery;
}());