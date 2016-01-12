/**
 * Created by caoyangkaka on 1/12/16.
 * @AjaxHelper used for the ajax helper class
 */
// build a lib to realize the function of ajax in jquery

(function () {
    // avoid duplicated load
    if (this.x) {
        return;
    }
    var x = this.x = {};

    var util = {
        getXHR: (function () {
            var list = [
                function () {
                    return new window.XMLHttpRequest();
                },
                function () {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                },
                function () {
                    return new ActiveXObject('Msxml2.XMLHTTP');
                },
                function () {
                    return new ActiveXObject('Msxml3.XMLHTTP');
                }
            ], xhr;
            while (xhr = list.shift()) {
                try {
                    xhr();
                    break;
                } catch (e) {
                    xhr = null;
                    continue;
                }
            }
            if (xhr !== null) {
                return xhr;
            } else {
                throw new ReferenceError("Doesn't support AJAX");
            }
        })(),
        each: (function () {
            if ([].forEach) {
                return function (list, cb, context) {
                    // context is the this in the cb function
                    [].forEach.call(list, cb, context);
                }
            } else {
                return function (list, cb, context) {
                    for (var i = 0; i < list.length; i++) {
                        cb.call(context, list[i], i, list);
                    }
                }
            }
        })(),
        init: function () {
            this.each(['String', 'Object', 'Number', 'Function', 'Array'], function (value) {
                util['is' + value] = isType(value);
            })
        },
        parseJson: (function() {
            if(window.JSON) {
                return function(str) {
                    return JSON.parse(str);
                }
            } else {
                // for IE67
                return function(str) {
                    return eval('(' + str + ')');
                    // return (new Function( 'return ' + str))();
                    // new Function 比 eval的安全性要高
                }
            }
        }())
    };
    var isType = function (str) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + str + ']';
        }
    }
    util.init();

    // the setting we got from the jquery.ajax
    var settings = {
        url: '',
        type: '',
        data: {},
        cache: false,
        async: true,
        username: undefined,
        password: undefined,
        dataType: 'text',
        success: function () {
        },
        error: function () {
        },
        timeout: 0,
        headers: {},
        context: window
    }

    x.$http = function (opt) {
        if (!util.isObject(opt)) {
            throw TypeError('Parameter must be an object.');
        }

        var _opt = {};
        // will test the n is in the settting, not see the value, which is a good way
        for (var n in settings) {
            if (!settings.hasOwnProperty(n)) {
                continue;
            } else {
                _opt[n] = opt[n] || settings[n];
            }
        }

        // step1
        var xhr = util.getXHR();

        // test for the type in the opt
        if (!/^(get|post|delete|put|options)$/ig.test(_opt.type)) {
            throw new Error('Wrong http method.');
        }
        // encodeURI(), #:?/@ , 不转义这些
        // encodeURIComponent(), 转义组件
        if (util.isObject(_opt.data)) {
            var arr = [];
            for (n in _opt.data) {
                if (!_opt.data.hasOwnProperty(n)) {
                } else {
                    arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(_opt.data[n]));
                }
            }
            _opt.data = arr.join('&');
        }

        // if get, then add the data back to the url
        if (/^(get|delete|head)$/ig.test(_opt.type) && _opt.data) {
            _opt.url += (/\?/.test(_opt.url) ? '&' : '?') + _opt.data;
            _opt.data = null;
        }

        // handle the cache problem
        if(!_opt.cache) {
            // doesn't cache
            var random = Math.floor(Math.random()*0xffffff).toString(36);
            // pair the _ with the random, build a new pair
            _opt.url += (/\?/.test(_opt.url)? '&':'?') + '_=' + random;
        }
        // step2
        xhr.open(_opt.type, _opt.url, _opt.async, _opt.username, _opt.password);

        // step3
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                var txt = xhr.responseText;
                if(_opt.dataType.toUpperCase() === 'JSON') {
                    try {
                        txt = util.parseJson(txt);
                        // will throw an error when the json is not valid
                    } catch(e) {
                        _opt.error(e);
                        return;
                    }
                }
                // when success
                _opt.success(txt);
            }
        }

        // handle the timeout
        if(util.isNumber(_opt.timeout) && _opt.timeout > 0) {
            if('timeout' in xhr) {
                // standard browser
                xhr.timeout = _opt.timeout;
                // 超市执行的函数
                xhr.ontimeout = function() {
                    _opt.error();
                }
            } else {
                // for the IE browser
                setTimeout(function() {
                    // if get time, and still not finished, then get abort it
                    if(xhr.readyState !== 4) {
                        xhr.abort();
                    }
                }, _opt.timeout);
            }
        }
        // already handle all the data before
        xhr.send(_opt.data);
    }

}());
