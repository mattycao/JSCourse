    <!--复习-->
    <!--
        1、免费课：
            1)数据类型(NaN,isNaN,!,!!相当于Boolean,Number,parseInt、parseFloat,object,function,基本数据类型和引用数据类型的区别,不同数据类型之间的转化规则,字符串拼接时候的规则)
            //扩展：在js中拼接html字符串的时候涉及的字符串拼接的4条黄金法则（项目实战中非常的重要）
            2)检测数据类型的4种方式，作用和局限性
            3)三个判断(== 和 ===的区别)和三个循环(break continue)
            4)数组和数组的12个方法、数组的冒泡、快速、插入排序、数组去重:基于Array的原型链实现，实现链式写法、第二天数组和面向对象教材中的后面，关于数组的常用的方法(each、交差并补集等)
            5)DOM的获取方法、获取关系的属性、其他操作(增删改克隆)的方法，设置自定义属性那一套
            6)String中的方法(match)
            7)Math中的方法
            8)Date中的方法
            9)运算符：|| &&

        重点的编程思想：自定义属性

        2、预解释、作用域、this
           预解释中的几种思想
           作用域：销毁和不销毁
           this的四种情况（call和apply总结 call和apply的应用）
           (第一天教材最后两道题做一边)

        3、单例模式、构造函数模式和原型链
            单例模式：最简单的对象封装、真实项目中的init的使用、单例模式深入优化：惰性载入函数的使用
            构造函数：和工厂模式的区别、hasOwnProperty和in、对象、类、实例的区别、instanceof、toString解决instanceof局限性
            原型链：prototype、__proto__、基于原型链的继承、constructor

        4、json(和处理json的几种方法 重点是eval)
          谷歌下安装一个jsonView插件
          http://sportswebapi.qq.com/match/index?columnId=100001&deviceId=B8C75D73CF65&startTime=20150413&endTime=20150430&direction=2&AppName=kanbisai&AppOS=ios&AppVersion=1.3&from=kbs_web&random=0.9262952983845025&callback=jQuery11110570581684121862_1428981730472&_=1428981730473

        5、正则
           常用的元字符，尤其是?的几种特殊情况
           分组
           test
           exec，捕获 贪婪模式和非贪婪模式  lastIndexOf
           通过while循环把所有需要的捕获的内容得到
           重点的是正则的实战应用：
           1)、表单验证 邮箱、数字、年龄、电话、手机等正则
           2)、千分符
           3)、replace的应用 $1、RegExp.$1
               获取某一个字符在字符串中出现的次数
               将数字替换成大写的
               my name is {0} 将数组中的项对应的显示在指定字符串位置中，格式化数据，模版引擎的原理就是这个
               去除开头和结尾的空格,处理trim的兼容性
               时间格式化
           4)queryStringURL解析网站的url地址中的参数
           5)截取字符串 区分中英文(中文占两个字符)

        6、表格排序(nodeListToArray call和apply的应用)、表单操作(全选和不全选、表单验证 onfocus onblur onkeyDown onkeyUp)

        7、DOM盒子模型和偏移量、 scrollTop和应用(跑马灯、回到页面顶部、图片延迟加载(非滚动的加载、onscroll时候的异步加载))
           DOM库的封装

        8、jQuery:选择器、DOM方法、数组方法、动画、放弃$的使用权，jQuery和js对象的转化、extend扩展、绑定事件、链式写法、$(document).ready的实现原理、选择器实现的基本原理、jQuery的应用

        9、定时器：两种定时器的区别和原理、定时器返回值和定时器的清除、setTimeout实现动画的轮循、关于js定时器异步编程思想、异步编程(定时器、onload、onscroll、onresize、callback)

        10、动画实现的原理和tween动画库(轮播图做的好一点就足矣了)
           轮播图最后一张的处理方式:把第一张克隆一份放在后面，然后让动画回到开始的位置


        具体的如何的分类，如何总结你们自己看着办，要求：知识点必须覆盖全、总结要清楚(自己能看懂)、知识点可以和案例分离