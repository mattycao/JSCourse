/**
 * Created by caoyangkaka on 1/15/16.
 */
function cssStyle2DomStyle(sName) {
    var arr = sName.split('-');
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    console.log(result);
    return result.charAt(0).toLowerCase() + result.slice(1);
}

function style(sName) {
    return sName.replace(/\-[a-z]/g, function (a, b) {
        return b == 0 ? a.replace('-', '') : a.replace('-', '').toUpperCase();
    });
}

var a = 'font-size-';
console.log(style(a));