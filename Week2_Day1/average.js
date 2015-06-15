/**
 * Created by caoyangkaka on 4/1/15.
 */
function average() {
    var a = [].slice.call(arguments, 0);
    a.sort(function(a, b) {
        return a - b;
    });
    a.shift();
    a.pop();
    //var sum = 0;
    //for(var i = 0; i < a.length; i++) {
    //    sum += a[i];
    //}
    //return sum/a.length;
    var sum = eval(a.join('+'));
    return sum/ a.length;

}

console.log(average(1, 3, 4, 5, 7, 8, 9, 10));


var str1 = 'var m = 77';
eval(str1);
console.log(eval(str1));
console.log(m);