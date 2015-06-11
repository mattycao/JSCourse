/**
 * Created by caoyangkaka on 6/10/15.
 */

/**
 *
 * @param cname: the class name
 * @param context: the context, like this
 */
function getElemsByClass(cname, context) {
    if(typeof cname == 'undefined') {
        return [];
    }
    context = context || document;
    if(document.getElementsByClassName) {
        // means it has these method
        return context.getElementsByClassName(cname);
    } else {
        // not with the existing method
        // idea: find all the tags, and then find the classname test whether it hs these cname in it
        var result = [];
        var reg = new RegExp('\\b' + cname + '\\b');
        var elems = document.getElementsByTagName('*');
        for(var i = 0; i < elems.length; i++) {
            if(reg.test(elems[i].className)) {
                result.push(elems[i]);
            }
        }
        return result;
    }
}