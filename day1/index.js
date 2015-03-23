/**
 * Created by caoyangkaka on 3/17/15.
 */
//onclick, then rest them all then add the select class to it
(function() {
    var liList = null;
    var divList = null;
    var tabDiv = document.getElementById('tab');
    liList = tabDiv.getElementsByTagName('li');
    divList = tabDiv.getElementsByTagName('div');



    function tabChange(n) {
        for(var i = 0; i < liList.length; i++) {
            liList.item(i).className = null;
            divList.item(i).className = null;
        }
        liList.item(n).className = 'one';
        divList.item(n).className = 'one';
    }

    for(var i = 0; i < liList.length; i++) {
        (function(i) {
            liList[i].onclick = function() {
                tabChange(i);
            }
        }(i));
    }
}());