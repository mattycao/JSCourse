/**
 * Created by caoyangkaka on 3/17/15.
 */
(function() {
    var olist = document.getElementById('tab');
    var liList = olist.getElementsByTagName('li');
    var divList = olist.getElementsByTagName('div');
    function tabChange(n) {
        for(var i = 0; i < liList.length; i++) {
            liList[i].className = null;
            divList[i].className = null;
        }
        liList[n].className = 'one';
        divList[n].className = 'one';
    }


    for(var i = 0; i < liList.length; i++) {
        (function(i) {
            liList[i].onclick = function() {
                tabChange(i);
            }
        })(i);
    }

}());