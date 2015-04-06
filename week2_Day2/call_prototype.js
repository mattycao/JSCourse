/**
 * Created by caoyangkaka on 4/3/15.
 */
//function printThis() {
//    console.log(this);
//}
//
//printThis();
//printThis.call();

function a() {
    console.log('A');
}

Function.prototype.call.call.call(a);

