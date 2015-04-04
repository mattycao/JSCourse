/**
 * Created by caoyangkaka on 4/3/15.
 */
var str = '887286';
var a = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];

//This is the example of to use replace to calculate the number of specific characters
//var str1 = 'aadsfasdf fasdfdf';
//
//var i = 0;
//var result = str1.replace(/a/g, function(s) {
//    return ++i;
//});
//
//console.log(result);


//var result = str.replace(/\d/g, function(value) {
//   return a[parseInt(value) - 1];
//});
//
//console.log(result);


var str1 = 'My name is {0}. I am {1} years old. I am in class {2} grade {3}.';

var arr = ['dong', 38, 4, 6];
var result = str1.replace(/{(\d)}/g, function(value, number) {
    return arr[number];
});

console.log(result);