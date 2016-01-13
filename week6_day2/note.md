1. http 1.1 http 2.0 区别
    1. 多路复用, 多个http请求复用一个tcp连接
    2. 首部压缩, 2.0压缩了
    3. 服务器推送, 做一个逻辑主动推送, 不需要请求
2. Multipurpose Internet Mail Extensions
3. setRequestHeader('content-type', 'application/x-www-form-urlencoded)
4. multipart/form-data, 可以传文件
5. 自定义头信息可以添加为api version
6. getResponseHeader('data');
7. getAllResponseHeaders()
8. xhr.overrideMimeType('text/plain'), 重写server发过来的mime type
9. 除了mime type, 其他的响应头信息都是只读的
10. send 可以传: string, formData, Bolb, arrayBuffer, null, undefined
11. send传递formData的数据时, request里面的content-type就会自动变成multipart/form-data
12. ArrayBuffer, Bolb, 二进制, ArrayBuffer可以
13. 当send方法里面穿二进制的时候,request的content-type要设置为: application/octet-stream
14. 一般用arraybuffer
15. 同域: scheme, hostname, port一致,那么就是同域 
16. 同源策略: 浏览器厂商为了安全强制添加的一种安全策略, 但是并不是所有的跨域都会收到影响,只有浏览器认为跨域请求构成安全威胁的时候才会激活同源策略限制
17. 比如image, script, iframe, 中的src中的引用, link中的href, 都不算
18. 但是iframe 无法操作里面的内容, 因为跨域, 无法操作里面的dom
19. link: 按照指定的格式导入到当前页面,除了css,其他的都只能链接本域内的
20. script: 同源策略是无视script标签的,也就是说不收同源策略的影响,但是会把加载到的内容强制作为脚本来执行, 会出错
21. img:标签不受同源策略的限制,但是会把加载到的内容强制当成图片来显示,只会显示一个裂图
22. iframe: 可以加载到其他的域名的内容,但是不能操作
23. jsonp 返回的数据有固定的格式, 方法名字(+ json数据 + )
24. json padding, 用script的手段实现了跨域,但是根本不是ajax 
    1. 只能请求接口形式(两种形式,接口形式,页面通讯形式)
    2. 只能用get方法,get有的jsonp都有
    3. 不安全,使用jsonp的接口安全系数非常低的接口, 服务器可以通过收到的头里面referer,检查是否回应
    4. cookie, 可以帮助安全性的判断
    5. 传过去的方法名字必须是全局方法
25. 统计, img可以用来做统计,访问的时候服务器返回一个1*1的透明图片,然后
26. jsonp请求完之后就不用再用了
27. cors: 跨域资源共享,也是用于接口的形式
28. cors = new XMLHttpRequest(), if cors.withCredential, 有了这个凭据就可以跨域, 默认false,不可以携带cookie, true,可以携带凭据
29. for ie, cors = new XDomainRequest(),有兼容性,IE8+, IE67不可以
30. cors.onload 就是为4的时候
31. 使用跨域的话我们必须要加上响应头(服务器端加): Access-Control-Allow-Origin, 两个值一个是*, 一个是指定的域名
32. 如果想携带cookie, 那么Access-control-Allow-Credential要设置

33. jsonp和cors的区别
    1. jsonp不算是ajax
    2. jsonp请求,必须得到jsonp的格式回应
    3. cors要加上特定的响应头
    4. jsonp只是get, cors都支持
    5. 相比较之下jsonp比cors不安全
    6. jsonp只能是异步的,而cors可同步,可异步
    7. jsonp没有兼容性,而cors不支持ie67
相同点:
    1. 都是跨域请求数据
    2. 都是接口形式的跨域请求形式
    
1. delete: 参数的都删不掉~
2. 逗号: 后面覆盖前面
