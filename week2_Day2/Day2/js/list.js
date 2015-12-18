var oTable=document.getElementById("tableList");
var oThs=oTable.getElementsByTagName("th");
var oTbody=oTable.getElementsByTagName("tbody").item(0);
var oRows=oTbody.getElementsByTagName("tr");
//var oTbody=oTable.tBodies.item(0);
//var oRows=oTbody.rows;

for(var i=3;i<oThs.length;i++){
    oThs.item(i).onclick=(function(i){
        return function(){
            var oRowsAry=likeArrayToArray(oRows);
            oRowsAry.sort(function(a,b){
                return a.cells[i].innerHTML- b.cells[i].innerHTML;
            });
            if(this.px==="asc"){
                oRowsAry.reverse();
                this.px="desc";
            }else{
                this.px="asc";
            }
            for(var j=0;j<oRowsAry.length;j++){
                oTbody.appendChild(oRowsAry[j]);
            }
        }
    })(i);
}

var oChecks=document.getElementsByName("tableBox");
for(var i=0;i<oChecks.length;i++){
    oChecks.item(i).onclick=(function(i){
        return function(){
            if(i===0){
                for(var j=1;j<oChecks.length;j++){
                    oChecks.item(j).checked=this.checked;
                }
                return;
            }
            var flag=true;
            for(var j=1;j<oChecks.length;j++){
                if(!oChecks[j].checked){
                    flag=false;
                    break;
                }
            }
            oChecks[0].checked=flag;
        }
    })(i);
}

function likeArrayToArray(likeArray){
    var ary=[];
    try{
        ary=[].slice.call(likeArray,0);
    }catch(e){
        for(var i=0;i<likeArray.length;i++){
            ary.push(likeArray[i]);
        }
    }
    return ary;
}












