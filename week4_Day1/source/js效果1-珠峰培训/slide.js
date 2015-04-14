/*
用这个示例主要学习三个知识点：
1、用JS怎么取到非行内的CSS样式，就是下面的这个css方法。
2、如果让动画在指定的时间内完成，象jQuery中的animate那样。
3、一个方法中的回调方法的应用
 这个示例综合性比较强，多体会里面的技艺和知识点
*/

function css(obj, attr, value)//类似jQuery中的CSS方法
{
	if(arguments.length==2)//如果传进来两个参数，则获取obj的attr这个CSS属性的值
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
	else if(arguments.length==3)//如果参进三个参数来，则是设定obj的attr这个CSS属性的值
		switch(attr)
		{
			case 'left':
			case 'top':
				obj.style[attr]=value+'px';
				break;
			case 'opacity'://处理不透明度的兼容性问题
				obj.style.filter="alpha(opacity:"+value*100+")";
				obj.style.opacity=value;
				break;
			default:
				obj.style[attr]=value;
				//这个方法并不完整，比较说float就没处理，复合的CSS属性也没有处理
		}
}

function  startMove(obj, oTarget, iTime, fn)
{
	var iInterval=30;//设定每执行一次动作的时间是30毫秒，下面的思路是在规定的时间内完成一个动画，象JQ的animate那样在指定的时间内完成动画
	var iTimes=Math.ceil(iTime/iInterval);//执行次数  一共需要iTime长的时间来完成这个动画，
	//每执行一次运动（动画）需要30毫秒，则Math.ceil(iTime/iInterval)是这个动画一共需要运动多少次
	var oSpeed={};//这个是单次运动的速度，不是一个值，而是一个对象，可以存多个值，因为动画在运动的时候，可能不是单一的运动，可能是既要移动left，还要移动top，或还要变化opacity，所以这里定义了一个对象。
	var attr='';
	var iEnd=(new Date()).getTime()+iTime;//算出动画完成时的时间点
	
	for(attr in oTarget)//注意学习 for in的用法
		oSpeed[attr]=(oTarget[attr]-css(obj, attr))/iTimes;
		//算出每次每个CSS属性需要走步长，也就是单步的速度
	
	if(obj.timer)
		clearInterval(obj.timer); //防止动画积累
	
	obj.timer=setInterval(function(){
		doMove(obj, oTarget, oSpeed, iEnd, fn);
	}, 30);
}

function doMove(obj, oTarget, oSpeed, iEnd, fn)
{
	var iNow=(new Date()).getTime();
	var attr='';
	
	if(iNow>=iEnd)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		for(attr in oTarget)
			css(obj, attr, oTarget[attr]);		
		if(fn)fn.call(obj, oTarget); 
	}
	else
		for(attr in oTarget)
			if(oSpeed[attr])
				css(obj, attr, css(obj, attr)+oSpeed[attr]);
}