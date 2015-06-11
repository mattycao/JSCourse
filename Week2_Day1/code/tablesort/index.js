/**
 * Created by caoyangkaka on 6/10/15.
 */
(function () {
    "use strict";
    // model
    var model = [
        {
            id: 1,
            name: 'Tody',
            english: 98,
            math: 77,
            chinese: 80
        },
        {
            id: 4,
            name: 'Dogn',
            english: 12,
            math: 99,
            chinese: 81
        },
        {
            id: 2,
            name: 'Mathing',
            english: 88,
            math: 100,
            chinese: 100
        },
        {
            id: 9,
            name: 'Ci Do',
            english: 100,
            math: 23,
            chinese: 56
        },
        {
            id: 6,
            name: 'Niu',
            english: 11,
            math: 60,
            chinese: 61
        },
        {
            id: 3,
            name: 'Betty',
            english: 80,
            math: 90,
            chinese: 61
        }
    ];

    // octopus
    var octopus = {
        init: function () {
            view.init();
        },

        getDataLength: function () {
            return model.length;
        },

        getDataByIndex: function (i) {
            return model[i];
        },

        sortModel: function (attr) {
            model.sort(function (a, b) {
                return a[attr] - b[attr];
            })
        }
    }

    // view
    var view = {
        init: function () {
            this.table = document.getElementById('table');
            this.tbody = document.getElementById('tbody');
            this.render();
            this.addCheckBox();
            this.addSort();
        },

        render: function () {
            var html = '';
            for (var i = 0; i < octopus.getDataLength(); i++) {
                var data = octopus.getDataByIndex(i);
                html += '<tr><td><input type="checkbox"/></td>' + '<td>' + data.id + '</td>' + '<td>' + data.name + '</td>' + '<td>' + data.english + '</td>' + '<td>' + data.math + '</td>' + '<td>' + data.chinese + '</td></tr>';
            }
            html += '';
            this.tbody.innerHTML = html;
        },

        addCheckBox: function () {
            this.checkAll = document.getElementById('allCheckBox');
            this.checkAll.onclick = function () {
                var list = view.table.getElementsByTagName('input');
                var on = this.checked;
                for (var i = 1; i < list.length; i++) {
                    list[i].checked = on;
                }
            }
        },

        addSort: function () {
            var heads = document.getElementsByTagName('th');
            for (var i = 1; i < heads.length; i++) {
                heads[i].onclick = (function (i) {
                    return function () {
                        var attr = this.innerHTML.toLowerCase();
                        // change the model will has some problem like, the checkbox event will be lost if we do the string addition, we better use the Dom manipulation
                        octopus.sortModel(attr);
                        view.reRender(i);
                    }
                }(i));
            }
        },

        reRender: function (i) {
            var rows = document.getElementsByTagName('tr');
            var rowArray = this.toArray(rows);

            rowArray.sort(function (a, b) {
                return a.cells[i].innerHTML - b.cells[i].innerHTML;
            });

            for (var j = 0; j < rowArray.length; j++) {
                this.tbody.appendChild(rowArray[j]);
            }


            //private
            // if we put hte private function, it will initialize every time if we reRendered, although this is not a big function, but in real world, we better not do this like this way.
            //function toArray(list) {
            //    var result = [];
            //    try {
            //        result = [].slice.call(list, 0);
            //    } catch (e) {
            //        for (var i = 0; i < list.length; i++) {
            //            result.push(list[i]);
            //        }
            //    }
            //    return result;
            //}
        },

        // although we put here, it is not private to the reRender function, but we doesn't pollute the global variable, so we can do it like this way.
        toArray: function (list) {
            var result = [];
            try {
                result = [].slice.call(list, 0);
            } catch (e) {
                for (var i = 0; i < list.length; i++) {
                    result.push(list[i]);
                }
            }
            return result;
        }

    }

    // run the code
    octopus.init();

}());