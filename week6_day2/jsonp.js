/**
 * Created by caoyangkaka on 1/13/16.
 */
(function () {
    var encode = function(data) {
        if(typeof data === 'string') {
            return data;
        }
        var result = [];
        for(var n in data) {
            if(data.hasOwnProperty(n)) {
                result.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
            }
        }
        return result.join('&');
    }

    var jsonp = this.jsonp = function (url, data, callback, jsonpcallback) {
        var count = 'cb' + jsonp.timer++; // used for avoid cache
        var cbname = 'window.jsonp.' + count;
        jsonp[count] = function(data) {
            try {
                callback(data);
            } finally {
                // 删掉这些冗余
                script.parentNode.removeChild(script);
                delete window.jsonp[count];
            }
        }
        var script = document.createElement('script');
        // url encode the data
        script.src = url + (/\?/.test(url)? '&' : '?') + encode(data) + '&' + jsonpcallback + '=' + cbname;
        document.body.appendChild(script);
    }
    jsonp.timer = 1;
}());