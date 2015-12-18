//将处理同一个功能模块的方法都放在一个命名空间下，这就是我们以后项目中最简单也是最长用的模块化开发--单例模式开发
var extendList={
    ele:null,
    sup:false,
    showList:function(ary){
        var str="";
        str+="<ul>";
        for(var i=0;i<ary.length;i++){
            str+="<li>";
            str+=(i+1)+"、";
            str+=ary[i];
            if(this.sup){
                str+="<span>0</span>";
            }
            str+="</li>";
        }
        str+="</ul>";
        this.ele.innerHTML=str;
    },
    changeColor:function(ary){
        var oLis=this.ele.getElementsByTagName("li");
        for(var i=0;i<oLis.length;i++){
            var oLi=oLis.item(i);
            for(var j=0;j<ary.length;j++){
                if(i%ary.length==j){
                    oLi.style.backgroundColor=ary[j];
                    oLi.setAttribute("bc",ary[j]);
                }
            }
        }
    },
    hover:function(color){
        var oLis=this.ele.getElementsByTagName("li");
        for(var i=0;i<oLis.length;i++){
            oLis.item(i).onmouseover=(function(i){
                return function(){
                    oLis.item(i).style.backgroundColor=color;
                }
            })(i);
            oLis.item(i).onmouseout=(function(i){
                return function(){
                    oLis.item(i).style.backgroundColor=oLis.item(i).getAttribute("bc");
                }
            })(i);
        }
    },
    praiseEvent:function(){
        var oLis=this.ele.getElementsByTagName("li");
        for(var i=0;i<oLis.length;i++) {
            oLis.item(i).onclick = (function (i) {
                return function(){
                    var oSpans=this.getElementsByTagName("span");
                    oSpans.item(0).innerHTML=Number(oSpans.item(0).innerHTML)+1;
                }
            })(i);
        }
    },
    init:function(options){
        //个传递的参数进行初始化
        var o=options;
        o.ele=o.ele||null;
        o.data= o.data||[];
        o.color= o.color||[];
        o.sel= o.sel||"";
        o.isSupport= o.isSupport||false;
        //通过参数进行我们的方法调用
        //显示列表
        this.sup= o.isSupport;
        this.ele= o.ele;
        this.showList(o.data);
        //隔行变色
        if(o.color.length>0){
            this.changeColor(o.color);
        }
        //高亮显示
        if(o.sel){
            this.hover(o.sel);
        }
        //支持赞
        if(o.isSupport){
            this.praiseEvent();
        }

    }
};

//为了实现可扩展和好维护，我们传递的参数最好是一个对象，把需要的东西都在对象中定义了