/**
 * Created by caoyangkaka on 6/10/15.
 */
/**
 * Find the max number in the array
 * @param arr: an array contains number element
 */
function findMax(arr) {
    if (arr && arr.length != 0) {
        var max = arr[0];
        for(var i = 1; i < arr.length; i++) {
            max = (arr[i] > max)? arr[i] : max;
        }
        return max;
    }else {
        return null;
    }
}

//test case
var list1 = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(findMax(list1));

// using the apply to get a better solution
// what we should notice here is that the Math is a singleton object, which means the method is not defined on its prototype.
function findMinApply(arr) {
    return Math.min.apply(null, arr);
}

console.log(findMinApply(list1));