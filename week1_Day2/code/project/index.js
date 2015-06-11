/**
 * Created by caoyangkaka on 6/8/15.
 * 有一个需求:
 * 1、数组中存了多少数据，我就显示多少行
 * 2、我可以指定是否进行隔行变色的效果，如果没有指定颜色就是不变色，我传递三个颜色就是隔3行变色...
 * 3、我还可以控制是否有鼠标划过高亮显示的功能,没传颜色就是不需要，传递颜色了就是需要，并且高亮颜色就是当前的
 * 4、选择性增加赞的效果，如果需要，默认会显示0赞+1
 */
(function () {
    "use strict";

    /* ======Model======  */
    var model = [
        "习近平批准规范军队福利将清理经适房",
        "李克强召开会议 明确政府工作报告部门分工",
        "苹果推以旧换新计划 欲蚕食安卓手机市场",
        "最高检：李春城蒋洁敏被提起公诉",
        "腾讯财报真相：增值业务放缓 广告营收空间有限",
        "广西桂林景区山石坠落击中游客 已致7死25伤",
        "习近平批准规范军队福利将清理经适房",
        "李克强召开会议 明确政府工作报告部门分工",
        "苹果推以旧换新计划 欲蚕食安卓手机市场",
        "最高检：李春城蒋洁敏被提起公诉",
        "腾讯财报真相：增值业务放缓 广告营收空间有限",
        "广西桂林景区山石坠落击中游客 已致7死25伤",
        "习近平批准规范军队福利将清理经适房",
        "李克强召开会议 明确政府工作报告部门分工",
        "苹果推以旧换新计划 欲蚕食安卓手机市场",
        "最高检：李春城蒋洁敏被提起公诉",
        "腾讯财报真相：增值业务放缓 广告营收空间有限",
        "广西桂林景区山石坠落击中游客 已致7死25伤",
        "习近平批准规范军队福利将清理经适房",
        "李克强召开会议 明确政府工作报告部门分工",
        "苹果推以旧换新计划 欲蚕食安卓手机市场",
        "最高检：李春城蒋洁敏被提起公诉",
        "腾讯财报真相：增值业务放缓 广告营收空间有限",
        "广西桂林景区山石坠落击中游客 已致7死25伤"
    ];

    /* ======Octopus======  */
    var octopus = {
        init: function (options) {

            view.init(options);
        },

        getDataLength: function () {
            return model.length;
        },
        getDataByIndex: function (index) {
            return model[index];
        },
        updateData: function (prev, now) {
            var value = model.splice(prev, 1)
            model.splice(now, 0, value);
        },

        // test only
        showAll: function () {
            return model;
        }

    }

    /* ======View======  */
    var view = {
        init: function (options) {
            this.options = options;
            this.div = document.getElementById('content');
            this.render(options.like);
            this.colorRender(options.colors);
            this.hover(options.sel);
            if (options.like) {
                this.addOne();
            }
        },

        render: function (like) {
            var html = '<ol>';
            var segment = like ? '<span>0</span>' : '';
            for (var i = 0; i < octopus.getDataLength(); i++) {
                html += '<li>' + octopus.getDataByIndex(i) + segment + '</li>';
            }
            html += '</ol>';
            this.div.innerHTML = html;
        },

        colorRender: function (colors) {
            var oList = this.div.getElementsByTagName('li');
            for (var i = 0; i < oList.length; i++) {
                for (var j = 0; j < colors.length; j++, i++) {
                    oList[i].style.backgroundColor = colors[j];
                }
                i--;
            }
        },

        hover: function (color) {
            if (color) {
                var oList = this.div.getElementsByTagName('li');
                for (var i = 0; i < oList.length; i++) {
                    oList[i].onmouseover = function () {
                        this.color = this.style.backgroundColor;
                        this.style.backgroundColor = color;
                    }
                    oList[i].onmouseout = function () {
                        this.style.backgroundColor = this.color;
                    }
                }
            }
        },

        addOne: function () {
            var oList = this.div.getElementsByTagName('li');
            for (var i = 0; i < oList.length; i++) {
                oList[i].onclick = (function (i) {
                    return function () {
                        var spans = this.getElementsByTagName('span');
                        var val = Number(spans[0].innerHTML);
                        spans[0].innerHTML = val + 1;
                        view.update(i, val + 1);
                    }

                })(i);
            }
        },

        /**
         *
         * @param index
         * @param value
         * Problem:
         * 1. we cannot just store the data in the dom, it is not a good way to do.
         * 2. since we use the closure to keep the data, although we use the dom replacement, the env of in the closure will not change, which make no sense.
         *
         */
        update: function (index, value) {
            var oList = this.div.getElementsByTagName('li');
            console.log('Index prev:' + index);
            for (var i = 0; i < index; i++) {
                console.log('Index value:' + value + ', i value:' + Number(oList[i].getElementsByTagName('span')[0].innerHTML));
                if (Number(oList[i].getElementsByTagName('span')[0].innerHTML) < value) {
                    console.log('Index:' + index + ', i:' + i);
                    oList[i].parentNode.insertBefore(oList[index], oList[i]);
                    this.colorRender(this.options.colors);
                    return;
                }
            }
        }

    }

    // execute the code
    octopus.init({
        colors: ['red', 'green', 'blue', '#ccc'],
        sel: 'pink',
        like: true
    });

}());