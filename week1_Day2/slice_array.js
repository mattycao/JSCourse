/**
 * Created by caoyangkaka on 3/24/15.
 *    Syntax
 * arr.slice([begin[, end]])
 *    Parameters
 * begin
 *    Zero-based index at which to begin extraction.
 *    As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
 *    If begin is omitted, slice begins from index 0.
 * end
 *    Zero-based index at which to end extraction. slice extracts up to but not including end.
 *    slice(1,4) extracts the second element up to the fourth element (elements indexed 1, 2, and 3).
 *    As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
 *    If end is omitted, slice extracts to the end of the sequence (arr.length).
 *    Description
 * slice does not alter. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:
 *
 * For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
 * For strings and numbers (not String and Number objects), slice copies strings and numbers into the new array. Changes to the string or number in one array does not affect the other array.
 * If a new element is added to either array, the other array is not affected.
 */
function slice(begin, end) {
    var result = [];
    // if the array is empty, return an empty array
    if (this.length == 0) {
        return result;
    }
    // the condition of missing arguments and not valid number
    if (arguments[0]) {
        begin = (isNaN(Number(arguments[0]))) ? 0 : Number(arguments[0]);
    } else {
        begin = 0;
    }
    // Here, if the end is not a valid, will always return an empty array
    if (arguments[1] && isNaN(Number(arguments[1]))) {
        return result;
    } else if (arguments[1] && !isNaN(Number(arguments[1]))) {
        end = Number(arguments[1]);
        // if end is 0, will return empty array
        if (end == 0) {
            return result;
        }
    } else {
        // if the end is missing, give the default value the array length
        end = this.length;
    }

    // Here, if begin < -this.length, the begin will change to 0
    if (begin < (0 - this.length)) {
        begin = 0;
    } else if (begin >= this.length) {
        //if begin is larger than the length, return empty array
        return result;
    } else if(begin >= (0 - this.length) && begin < 0) {
        begin = begin + this.length;
    }
    // return empty if end is less or equal than -this.length
    if (end <= (0 - this.length)) {
        return result;
    } else if (end > this.length) {
        // end will be this.length if larger than this.length
        end = this.length;
    } else if(end > (0 - this.length) && end < 0) {
        end = end + this.length;
    }

    // return empty if begin is larger or equal than end
    if (begin >= end) {
        return result;
    }
    // after all pass, it will return the value copied array
    for (var i = begin; i < end; i++) {
        result.push(this[i]);
    }
    return result;

}
Array.prototype.sliced = slice;

//test case
var arr = [1, 2, 3];
console.log(arr.slice());
console.log(arr.sliced());
var ar = [];
console.log(ar.slice());
console.log(ar.sliced());
console.log(arr.slice('1', '2'));
console.log(arr.sliced('1', '2'));
console.log(arr.slice('1px', 2));
console.log(arr.sliced('1px', 2));
console.log(arr.slice('1ds', 'ad'));
console.log(arr.sliced('1ds', 'ad'));
console.log(arr.slice(1));
console.log(arr.sliced(1));
console.log(arr.slice(3, 4));
console.log(arr.sliced(3, 4));
console.log(arr.slice(-4, -3));
console.log(arr.sliced(-4, -3));
console.log(arr.slice(1, 5));
console.log(arr.sliced(1, 5));
console.log(arr.slice(1, -1));
console.log(arr.sliced(1, -1));
