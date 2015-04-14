//珠峰培训TWEEN动画库  2013年7月14日课堂示例
//用法和效果参考：http://www.zhufengpeixun.cn/tween
var zhufengEffect = {
	//当前时间*变化量/持续时间+初始值
	zfLinear: function(t,b,c,d){ return c*t/d + b; },
	Quad: {//二次方的缓动（t^2）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	},
	Cubic: {//三次方的缓动（t^3）
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		}
	},
	Quart: {//四次方的缓动（t^4）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		}
	},
	Quint: {//5次方的缓动（t^5）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		}
	},
	Sine: {//正弦曲线的缓动（sin(t)）
		easeIn: function(t,b,c,d){
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOut: function(t,b,c,d){
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		}
	},
	Expo: {//指数曲线的缓动（2^t）；
		easeIn: function(t,b,c,d){
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOut: function(t,b,c,d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	},
	Circ: {//圆形曲线的缓动（sqrt(1-t^2)）；
		easeIn: function(t,b,c,d){
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		}
	},
	Elastic: {//指数衰减的正弦曲线缓动；
		easeIn: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
		},
		easeInOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		}
	},
	Back: {//超过范围的三次方缓动（(s+1)*t^3 - s*t^2）；
		easeIn: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158; 
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		}
	},
	zfBounce: {//指数衰减的反弹缓动。
		easeIn: function(t,b,c,d){
			return c - zhufengEffect.zfBounce.easeOut(d-t, 0, c, d) + b;
		},
		easeOut: function(t,b,c,d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOut: function(t,b,c,d){
			if (t < d/2) return zhufengEffect.zfBounce.easeIn(t*2, 0, c, d) * .5 + b;
			else return zhufengEffect.zfBounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	}
};


//把操作CSS的方法独立成一个单独的函数，这样模块之间更清晰
function css(ele,attr,val){
	//方法重载：方法名相同，但参数个数或类型不同，实现的功能不同，叫方法重载。
	//在JS中，用判断参数的个数或参数类型来实同方法重载
	//arguments.length==3
	if(typeof val=="number"){//如果正确的传了第三个参数，则是设置CSS值的
		if(attr=="opacity"){
			ele.style.opacity=val;
			ele.style.filter="alpha(opacity="+val*100+")";	
		}else{
			ele.style[attr]=val+"px";			
		}
	}else{//读CSS值的
		if(attr=="opacity"){//如果是读不透明度的值
			if(typeof getComputedStyle=="function"){//标准浏览器
				var val=getComputedStyle(ele,null)[attr];
				return parseFloat(val);
			}else{//IE中				
				var val=ele.currentStyle.opacity;
				val=parseFloat(val);//如果没有设置opacity的值，则val的值是undefined
				if(isNaN(val)){//undefined转换为数字会失败，为NaN,
				//判断一个数是否为NaN用isNaN方法，不能用NaN==NaN
					//ele.style.opacity=1;//
					//ele.style.filter="alpha(opacity=100)";//实际起作用的
					return 1;
				}else{
					return parseFloat(val);					
				}
			}			
		}else{//获得非opacity属性的css样式			
			var val=window.getComputedStyle?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];
			return parseFloat(val);			
		}		
	}
}
/*
	珠峰培训2013年7月14日课堂示例
	animate方法参数的说明
	ele：做动画的元素
	obj:运动的方向，类似于var 			obj={width:350,height:277,top:190,left:378,opacity:1};
	duration:完成动画所需的时间
	type：可选参数，不写则默认按减速运动
	callback:回调方法

*/
function animate(ele,obj,duration,type,callback){
	//if(typeof duration!=undefined){
		//duration=500;		
	//}
	/*
		type参数是指的在31种效果中指定一种
		type可是数字，0是直线，1是flex,2,back,3,反弹的，4减速的
		也是可是字符串的：linear,flex,back,bounce,buffer
		还可以是数组，形式如下：
		['zfBounce','easeOut']
		zhufengEffect['zfBounce']['easeOut'];
		zhufengEffect.zfBounce.easeOut	
	*/
	
	if(typeof type=="undefined"){
		var fnType=zhufengEffect.Quint.easeOut;//buffer
		
	}else if(typeof type=="number"){
		switch(type){
		case 0:
			var fnType=zhufengEffect.zfLinear;
			break;
		case 1:
			var fnType=zhufengEffect.Elastic.easeOut;
			break;
		case 2:
			var fnType=zhufengEffect.Back.easeOut;//buffer
			break;
		case 3:
			var fnType=zhufengEffect.zfBounce.easeOut;//buffer
			break;
		case 4:	
			var fnType=zhufengEffect.Quint.easeOut;//buffer
			break;
		default:
			//alert("没事找抽啊！");
			var fnType=zhufengEffect.Quint.easeOut;//buffer			
		}
		
	}else if(type instanceof Array){
		if(type.length==2){
			var fnType=zhufengEffect[type[0]][type[1]];
		}else if(type.length==1){
			var fnType=zhufengEffect.zfLinear;
		}else{
			alert("没事找抽啊！");		
		}
		
	}else if(typeof type =="function"){
		callback=type;//如果type这个参数是个function，则默认为这是回调方法
		var fnType=zhufengEffect.Quint.easeOut;//buffer
		
	}
	var oBegin={};//把起始始的位置保存在oBegin这个对象里
	var oChange={};//把运动的总距离保存在oChange这个对象里
	var identifier=0;
	for(var direc in obj){
		var begin=css(ele,direc);
		var change=obj[direc]-begin;
		if(change){//如果change是0则不需要再保存此方向的begin和change了
					//因为起点和终点相同
			oBegin[direc]=begin;
			oChange[direc]=change;
			identifier++
		}		
	}
	if(!identifier)
		return ;
	var interval=15;
	var times=0;
	clearTimeout(ele.timer);
	_move();
	function _move(){
		times+=interval;
		if(times>=duration){
			for(var direc in obj){//把每个方向目的地分解出来
				var target=obj[direc];
				css(ele,direc,target);
				ele.timer=null;
				if(typeof callback=="function"){
					callback.call(ele);					
				}
			}
		}else{
			for(var direc in oChange){//把起始位置和变化的总距离分解出来
				var begin=oBegin[direc];
				var change=oChange[direc];
				var val=fnType(times,begin,change,duration);
				css(ele,direc,val);
			}
			ele.timer=window.setTimeout(_move,interval);
		}		
	}	
}