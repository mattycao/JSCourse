///**
// * Created by caoyangkaka on 3/11/15.
// */
//
//function remove(list) {
//    var obj = {};
//    for(var i = 0; i < list.length; i++) {
//        var value = list[i]
//;        if(obj[value] == value) {
//            list.splice(i, 1);
//            i--;
//        } else {
//            obj[value] = value;
//        }
//
//    }
//    obj = null;
//    console.log(list);
//}
//var a = [1,3,4,3,5, 3, 4, 6];
//remove(a);
//
//var b = 0;
//console.log(++b);
//if(' ') {
//    console.log('True');
//} else {
//    console.log('false');
//}
//
//var m =1, n = 2;
//var c = null;
//
//
//var str = '1-2&3$4';
//console.log(str.split(/[-&$]/));
//
//var str = '2014-9-29 15:41:12';
//function timer(str) {
//    var data = str.split(/[- :]/);
//    console.log(data);
//    for(var i = 0; i < data.length; i++) {
//        if(parseInt(data[i]) <10) {
//            data[i] = '0' + data[i];
//            console.log('really?');
//        }
//
//    }
//    data[0]+= '年';
//    data[1] += '月';
//    data[2] += '日 ';
//    data[3] += '点';
//    data[4] += '分';
//    data[5] += '秒';
//    console.log(data);
//    console.log(data.join(''));
//    return data.join('');
//}
//
//console.log(timer(str));
//
//var d = (a)? 1 : 2;
//console.log(d);

//function move() {
//    console.log(new Date());
//    setTimeout(move, 1000);
//}
//move();

var a = 12;
console.log(5 + (++a) + (a++));
console.log(5 + (a++) + (++a) + (a++));
console.log(a);

