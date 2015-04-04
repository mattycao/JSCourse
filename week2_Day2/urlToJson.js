/**
 * Created by caoyangkaka on 4/3/15.
 */
function urlToJson(str) {
    // get the negative
    var reg = /([^\?=\&]+)=([^\?=\&]+)/g;
    var result = null;
    var a = [];
    while (result = reg.exec(str)) {
        console.log(result);
        a.push(result);
    }
    var json = '{';
    for (var i = 0; i < a.length; i++) {
        json += '\"' + a[i][1] + '\":\"' + a[i][2] + '\"';
        if (i != a.length - 1) {
            json += ',';
        }
    }
    json += '}';
    return json;
}

var str = 'http://www.baidu.com/search?a=1&b=c';
console.log(urlToJson(str));

function urlToJSON(str) {
    var n = str.indexOf('?');
    var str1 = str.substring(n + 1);
    var a = str1.split('&');
    // not the reg exression method
}