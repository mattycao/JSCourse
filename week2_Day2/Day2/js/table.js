//需求：
//1、实现全选和全不选功能，并且，当下面表格中的复选框有一个没有选中的，我们就让第一个复选框取消选中，当下面的复选框都手动选中了，我们让第一个复选框也选中
//2、刚开始没有按照任何的分数排序，然后当我们点击语文分数(表头)的时候，列表按照语文分数从小到大排序，在点按照从大到小排序，在点按照从小到大排序.......
//3、数学分数和英语分数也要实现和上面一样的需求

//实现第一个需求:
//1、获取想要操作的元素
var firstCheck=document.getElementById("firstInput");
var allChecks=document.getElementsByName("tableBox");
//2、给第一个绑定事件，实现全选和全不选
firstCheck.onclick=function(){
    for(var i=1;i<allChecks.length;i++){
        var cur=allChecks.item(i);
        cur.checked=this.checked;
    }
}
//3、给下面的每一个复选框绑定事件，实现：只要有一个没有选中，第一个也不选中，如果都选中了，第一个也选中
for(var i=1;i<allChecks.length;i++){
    allChecks.item(i).onclick=(function(i){
        return function(){
            var totalState=true;
            for(var j=1;j<allChecks.length;j++){
                var state=allChecks.item(j).checked;
                if(!state){
                    totalState=false;
                    break;
                }
            }
            firstCheck.checked=totalState;
        }
    })(i);
}

//需求2:实现按照语文分数排序
//获取table
var oTable=document.getElementById("tableList");
var allThs=oTable.getElementsByTagName("th");
for(var i=3;i<allThs.length;i++){
    allThs[i].onclick=(function(i){
        return function(){
            tableSort.call(this,i);
        }
    })(i);
}
//n就是告诉我按照第几列(n就是索引)来排序
function tableSort(n){
    //获取table下的第一个tbody
    var oTbody=oTable.tBodies[0];
    //获取第一个tbody下的所有的行（类数组）
    var allRows=oTbody.rows;
    //如果想用sort方法排序，就要转化为数组
    var allRowsAry=tool.nodeListToArray(allRows);
    //用sort方法排序(升序)
    allRowsAry.sort(function(a,b){
        return a.cells[n].innerHTML- b.cells[n].innerHTML;
    });
    //判断如果当前已经是升序，我们让他按照降序排列，千万别忘记把自定义的标志也要改了；如果没有或者是降序，我们就按照升序排列就好了，也别忘了改标志
    if(this.getAttribute("px")==="asc"){
        allRowsAry.reverse();
        this.setAttribute("px","desc");
    }else{
        this.setAttribute("px","asc");
    }
    //数组排完序号后从新放回tbody,数组中的每一项是当前行
    for(var i=0;i<allRowsAry.length;i++){
        oTbody.appendChild(allRowsAry[i]);
    }
}








//设置复选框选中 元素.checked=true选中 =false就是不选中
//获取选中状态 firstCheck.checked
//firstCheck.checked=true;
//console.log(firstCheck.checked);


/*
var oChina=document.getElementById("chinaScore");
oChina.onclick=function(){
    var oTable=document.getElementById("tableList");
    var oTbody=oTable.tBodies.item(0);
    var allRows=oTbody.rows;
    var rowsAry=tool.nodeListToArray(allRows);
    if(this.getAttribute("sortType")==="asc"){
        rowsAry.sort(function(a,b){
            return b.cells[3].innerHTML- a.cells[3].innerHTML;
        });
        this.setAttribute("sortType","desc");
    }else{
        rowsAry.sort(function(a,b){
            return a.cells[3].innerHTML- b.cells[3].innerHTML;
        });
        this.setAttribute("sortType","asc");
    }
    for(var i=0;i<rowsAry.length;i++){
        oTbody.appendChild(rowsAry[i]);
    }
}
*/



//console.log(allRows);//获取的行也是类数组
//console.log(oTable.tBodies.item(0));//tBodies:获取的是一个类数组，tbody是第一项


//借用Array原型链上的slice方法实现将类数组转化为数组：
//arguments是类数组，可以 [].slice.call(arguments,0);
//Array.prototype.slice.call(arguments,0);
//并且arguments兼容所有的浏览器
//通过DOM方法获取元素集合的也是类数组,也可以借用Array上的slice方法实现，但是在IE6~8浏览器中不兼容















