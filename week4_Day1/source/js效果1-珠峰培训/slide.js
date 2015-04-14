/*
�����ʾ����Ҫѧϰ����֪ʶ�㣺
1����JS��ôȡ�������ڵ�CSS��ʽ��������������css������
2������ö�����ָ����ʱ������ɣ���jQuery�е�animate������
3��һ�������еĻص�������Ӧ��
 ���ʾ���ۺ��ԱȽ�ǿ�����������ļ��պ�֪ʶ��
*/

function css(obj, attr, value)//����jQuery�е�CSS����
{
	if(arguments.length==2)//����������������������ȡobj��attr���CSS���Ե�ֵ
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
	else if(arguments.length==3)//����ν������������������趨obj��attr���CSS���Ե�ֵ
		switch(attr)
		{
			case 'left':
			case 'top':
				obj.style[attr]=value+'px';
				break;
			case 'opacity'://����͸���ȵļ���������
				obj.style.filter="alpha(opacity:"+value*100+")";
				obj.style.opacity=value;
				break;
			default:
				obj.style[attr]=value;
				//������������������Ƚ�˵float��û�������ϵ�CSS����Ҳû�д���
		}
}

function  startMove(obj, oTarget, iTime, fn)
{
	var iInterval=30;//�趨ÿִ��һ�ζ�����ʱ����30���룬�����˼·���ڹ涨��ʱ�������һ����������JQ��animate������ָ����ʱ������ɶ���
	var iTimes=Math.ceil(iTime/iInterval);//ִ�д���  һ����ҪiTime����ʱ����������������
	//ÿִ��һ���˶�����������Ҫ30���룬��Math.ceil(iTime/iInterval)���������һ����Ҫ�˶����ٴ�
	var oSpeed={};//����ǵ����˶����ٶȣ�����һ��ֵ������һ�����󣬿��Դ���ֵ����Ϊ�������˶���ʱ�򣬿��ܲ��ǵ�һ���˶��������Ǽ�Ҫ�ƶ�left����Ҫ�ƶ�top����Ҫ�仯opacity���������ﶨ����һ������
	var attr='';
	var iEnd=(new Date()).getTime()+iTime;//����������ʱ��ʱ���
	
	for(attr in oTarget)//ע��ѧϰ for in���÷�
		oSpeed[attr]=(oTarget[attr]-css(obj, attr))/iTimes;
		//���ÿ��ÿ��CSS������Ҫ�߲�����Ҳ���ǵ������ٶ�
	
	if(obj.timer)
		clearInterval(obj.timer); //��ֹ��������
	
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