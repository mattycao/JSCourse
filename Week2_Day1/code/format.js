/**
 * Created by caoyangkaka on 6/15/15.
 */
function format(str, obj) {
    var result = str.replace(/{(\w+)}/g, function() {
        if(obj[RegExp.$1]) {
            console.log(obj[RegExp.$1]);
            return obj[RegExp.$1];
        } else {
            return arguments[0];
        }
    })
    return result;
}

// test

var str = '{v1}, Hello {v2} {v3}';
var obj = {
    v1: 'Matt',
    v2: 'Baidu'
};

console.log(format(str, obj));

console.log(str.replace(/v1/, function() {}));