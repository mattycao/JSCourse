/**
 * Created by caoyangkaka on 3/22/15.
 */
var n = 9;
var s = 'abcd';
var f = 'dongdong';
function fn() {
    console.log(n);
    console.log(s);
    n = 7;
    var n = 6;
    //will be assign when the fn is evoked
    function inner() {
        console.log(n);
        console.log(s);
        console.log(f);
        var f = 'f';

    }
    inner();
};
fn();

console.log(global);
