/**
 * Created by caoyangkaka on 4/5/15.
 */
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(result.length);
console.log(Array.isArray(result));