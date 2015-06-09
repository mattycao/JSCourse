/**
 * Created by caoyangkaka on 6/2/15.
 */
/**
 * This is used to add a random method for array to get random number of elements from array
 */
Array.prototype.random = function(n) {
    var result = [];
    var n = n || 0;
    for(var i = 0; i < n; i++) {
        var rand = Math.floor(Math.random()* this.length);
        var temp = this[rand];
        this[rand] = this[this.length - 1];
        this.length--;
        result.push(temp);
    }
    return result;
}

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('' + list.random(4));
console.log('' + list);

/**
 * This is used for test whether the object is an array
 */

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

/**
 * This is used for to remove the duplicated element in the array
 */
Array.prototype.distinct = function() {
    var test = {};
    for(var i = 0; i < this.length;) {
        if(test[this[i]]) {
            this.splice(i, 1);

        } else {
            test[i] = true;
            i++;
        }
    }
}
list.distinct();
console.log(list + '');
list.push('9', '2');
list.distinct();
console.log(list + '');

/**
 * check a attribute which is a public attribute
 */

function checkPublicAttribute(obj, attr) {
    return (attr in obj) && (!obj.hasOwnProperty(attr));
}

console.log(checkPublicAttribute({}, 'hasOwnProperty'));