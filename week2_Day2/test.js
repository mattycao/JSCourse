/**
 * Created by caoyangkaka on 4/5/15.
 */
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(result.length);
console.log(Array.isArray(result));

var str = '1123234324123123';
var result = str.replace(/^(\d{1,3})((?:\d{3})+)$/, function(arg0, arg1, arg2) {
    return arg1 + arg2.replace(/\d{3}/g, function(rs) {
            return ',' + rs;
        });
});
console.log(result);
