/*
 *utils工具类包，包含一些常用的非业务逻辑的方法
**/
var utils = {
    nodeListToArray: function (nodeList) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(nodeList, 0);
        } catch (e) {
            for (var i = 0; i < nodeList.length; i++) {
                ary.push(nodeList[i]);
            }
        }
        return ary;
    }
};