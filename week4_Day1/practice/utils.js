/**
 * Created by caoyangkaka on 6/18/15.
 */
utils = {};
utils.getCss = function (ele, attr) {
    try {
        // notice here, the getComputedSyle is the attribute of window, please
        return parseFloat(window.getComputedStyle(ele, null)[attr]);
    } catch (e) {
        if (attr === 'opacity') {
            // for the opacity filter in ie
            var reg = /^alpha\(opacity=(\d+)\)$/;
            if (reg.test(ele.currentStyle.filter)) {

                return RegExp.$1 / 100; // keep the unit
            } else {
                return 1;
            }
        } else {
            return parseFloat(ele.currentStyle[attr]);
        }
    }
}

utils.css = function (ele, attr, value) {
    if (arguments.length == 2) {
        try {
            // notice here, the getComputedSyle is the attribute of window, please
            return parseFloat(window.getComputedStyle(ele, null)[attr]);
        } catch (e) {
            if (attr === 'opacity') {
                // for the opacity filter in ie
                var reg = /^alpha\(opacity=(\d+)\)$/;
                if (reg.test(ele.currentStyle.filter)) {

                    return RegExp.$1 / 100; // keep the unit
                } else {
                    return 1;
                }
            } else {
                return parseFloat(ele.currentStyle[attr]);
            }
        }
    } else if (arguments.length === 3) {
        switch (attr) {
            case "opacity":
                ele.style.opacity = value;
                ele.style.filter = "alpha(opacity=" + value * 100 + ")";
                break;
            case "width":
            case "height":
            case "top":
            case "left":
                ele.style[attr] = value + "px";
                break;
            default:
                ele.style[attr] = value;
        }
    }

}