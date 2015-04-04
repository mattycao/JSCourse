/**
 * Created by caoyangkaka on 4/3/15.
 */
// normalize the code of js
var reg = /<(div)>(.|\n)*?<\/\1>/;
//div can be changed to any tag name

var content = reg.exec(document.body.innerHTML);
if(content) {
    var a = content[2].split('\n');

}

