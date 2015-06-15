/**
 * Created by caoyangkaka on 6/15/15.
 */
JSON = {};
JSON.stringify = function(obj) {
    var result = '{';
    for(var attr in obj) {
        var val = obj[attr];
        if(typeof val === 'string') {
            result += '\"' + attr + '\":\"' + obj[attr] + '\"';
        } else if(typeof val === 'number' || typeof val === 'boolean' || val === null) {
            result += '\"' + attr + '\":' + obj[attr];
        }
        result += ',';
    }
    result = result.substr(0, result.length - 1);
    return result + '}';
}
JSON.parse = function(str) {
    // here, we need use the window, since if we use the JSON, if JSON is not defined, then it will throw error
    if(window.JSON) {
        return JSON.parse(str);
    } else {
        return eval('(' + str + ')');
    }
};

// But the previous is not a good way, so we better use the try catch
JSON.parse = function(str) {
    try {
        return JSON.parse(str);
    } catch(e) {
        return eval('(' + str + ')'); // not a safe way to do
    }
}

// test
var obj = {a: 1, b: 2, dong: 'fengxi'};
console.log(JSON.stringify(obj));
