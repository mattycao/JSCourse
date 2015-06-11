/**
 * Created by caoyangkaka on 6/10/15.
 */

/**
 * Transfer the str to json
 * @param str
 */
function stringToJson(str) {
    var json = null;
    try {
        json = JSON.parse(str);
    } catch (e) {
        json = eval('(' + str + ')');
    }
    return json;
}

//test
var str = '[{"name": "A"}, {"name": "B"}, {"name": "C"}]';
console.log(stringToJson(str));

// JSON.stringify(json); // transfer it to a json string

// avoid using the eval() in project

// eval is used for evaluate a string into a js.
