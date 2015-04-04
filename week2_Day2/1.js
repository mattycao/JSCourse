///**
// * Created by caoyangkaka on 4/2/15.
// */
//// 验证一个整数字符串
//(function () {
//    "use strict";
//    var reg = /^[-+\d]\d+$/;
//    var str = '12323';
//    console.log(reg.test(str));
//    var str1 = '-12213';
//    console.log(reg.test(str1));
//    var str2 = '+12213';
//    console.log(reg.test(str2));
//    var str3 = '1';
//    console.log(reg.test(str3));
//    var reg1 = /^[-+]?\d+$/;
//    console.log(reg1.test(str3));
//    var reg2 = /(^[-+]?[1-9]\d*$)|0/;
//// how about the 0
//    console.log(reg2.test('0'));
//
//
/////float number
//    console.log('Float Number:')
//    var reg3 = /(^[-+]?[1-9]\d*(\.\d+)?$)|0/;
//    console.log(reg3.test('1.1'));
////0.9 is not write
//// using the Number to test whether it is a number or not.
//
//    var reg4 = /[china/chinese/chin]/;
//    console.log(reg4.test('Iamchinese'));
//
//    var reg5 = /\s.+/;
//    console.log(reg5.exec('This is a test string.'));
//
//
//}());


//split
var str1 = '2014.1.1 12:10:07';
console.log(str1.split(/[.\s:]/));
var str2 = '777933330004303';
var a = str2.split('').sort().join('');
console.log(a);
var b = a.replace(/(\d)\1+/g, function(value, index) {
    //console.log(typeof value);
    return index;
});
console.log(b);