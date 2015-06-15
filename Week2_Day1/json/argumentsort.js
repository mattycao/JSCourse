/**
 * Created by caoyangkaka on 6/15/15.
 */
function arguSort() {
    var a = arguments;
    console.log(a);
    var num = [].sort.call(arguments, function(a, b) {return a - b});
    console.log(a);
    return num;
}

// test
console.log(arguSort(1, 3, 2));