/**
 * Created by caoyangkaka on 6/15/15.
 */
// 千分符
var str = '1123234324123123';
// way 1
var result = str.replace(/^(\d{1,3})((?:\d{3})+)$/, function (arg0, arg1, arg2) {
    return arg1 + arg2.replace(/\d{3}/g, function (rs) {
            return ',' + rs;
        });
});
console.log(result);
// way 2
var result = str.replace(/\d/g, function (r, i) {
    var n = str.length - 1 - i;
    // before 3n, add the ,
    if (n > 0 && n % 3 == 0) {
        return r + ',';
    } else {
        return r;
    }
});

console.log(result);

// way 3
function addComma(str) {
    var temp = str.split('').reverse().join('');
    var result = temp.replace(/(\d{3}(?!$))/g, '$1,');
    return result.split('').reverse().join('');
}

console.log(addComma(str));

// ip
var ip1 = '129.34.1.3';
function ipParse(ip) {
    return ip.match(/\b\d{1,3}\b/g);
}

console.log(ipParse(ip1));

// parse url
function parseUrl(str) {
    var result = {};
    str.replace(/([^?=&]+)=([^?=&]+)/g, function () {
        result[RegExp.$1] = RegExp.$2;
        return arguments[0];
    });
    return result;
}

function parseUrl(str) {
    var result = {};
    var reg = /([^?=&]+)=([^?=&]+)/g;
    while (reg.test(str)) {
        result[RegExp.$1] = RegExp.$2;
    }
    return result;
}

//test
var str = 'http://goodafd.com?a=1&b=adsdfasf';
console.log(parseUrl(str));

// about format time
//var str1="2012-04-06 12:30:30"
// 要求：将其转换为这种格式：
// 2012年04月06日12时30分30秒
var str1 = "2012-04-06 12:30:30";
var reg = /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
str = str1.replace(reg, "$1年$2月$3日$4时$5分$6秒");
console.log(str);

var reg = /^\s*$/; // 空验证正则