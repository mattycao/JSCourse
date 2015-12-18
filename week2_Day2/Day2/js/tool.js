var tool={
    nodeListToArray:function(nodeList){
        var ary=[];
        try{
            ary=[].slice.call(nodeList,0);
        }catch(e){
            for(var i=0;i<nodeList.length;i++){
                ary.push(nodeList.item(i));
            }
        }
        return ary;
    }
};






/*
//用来捕获浏览器中的异常信息的
//如果try catch中的代码出现问题，try catch外面的代码还可以继续执行
//但是如果我们的错误代码非常重要，不执行成功就不能执行的话，我们可以在catch中将错误信息用 throw new Error()抛出来，这样后面的代码就不执行了


try{
    //执行的js代码
}catch(e){
    //如果代码出错，在catch中可以捕获到
    //e.message 就是我们的错误信息
}finally{
    //不管有没有出现代码问题都会执行，通常不用写这个
}

//js中如果出现代码错误，后面的代码就不在执行了

 var a=12;
 try{
 a();
 }catch(e){
 console.log(e.message);
 throw new Error(e.message);
 }
 a+=3;
 console.log(a);
*/



