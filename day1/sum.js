/**
 * Created by caoyangkaka on 3/13/15.
 */
function sum() {
    var total = null;
    for(var i = 0; i < arguments.length; i++) {
        if(!isNaN(arguments[i])) {
            total+= Number(arguments[i]);
        }
    }
    return total;

}