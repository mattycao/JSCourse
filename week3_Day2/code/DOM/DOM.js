/**
 * Created by caoyangkaka on 6/17/15.
 */
var DOM = {};

// the first one is the the like array to array
DOM.listToArray = function (list) {
    // the idea is this, try use the slice method to transfer, if cannot, we use transfer it one by one
    try {
        return [].slice.call(list, 0);
    } catch (e) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            result.push(list[i]);
        }
        return a;
    }
}

// offset from the body
DOM.offset = function (ele) {
    // the idea of the offset is adding the offsetTop, offsetLeft and the border
    var p = ele.offsetParent,
        left = ele.offsetLeft,
        top = ele.offsetTop;
    while (p) {
        if (window.navigator.userAgent.indexOf('MSIE 8.0') > -1) {
            // no need add the border
            left += p.offsetLeft;
            top += p.offsetTop;
        } else {
            left += p.offsetLeft + p.clientLeft;
            top += p.offsetTop + p.clientTop;
        }
        p = p.offsetParent;
    }
    return {
        top: top,
        left: left
    }
}

// get the index of the DOM
DOM.getIndex = function (ele) {
    var index = 0;
    var name = ele.nodeName;
    for (var temp = ele.previousSibling; temp; temp = temp.previousSibling) {
        // using the previousSibling to get the index, first we need know it is element node, and then the node is the same element node type
        if (temp.nodeType === 1 && temp.nodeName === name) {
            index++;
        }
    }
    return index;
}

// get all the siblings of this element except itself
DOM.siblings = function (ele) {
    var result = [],
        list = ele.parentNode.childNodes;
    for (var i = 0; i < list.length; i++) {
        var node = list[i];
        if (node.nodeType === 1 && node !== ele) {
            result.push(node);
        }
    }
    return result;
}

// get all the previous Siblings
DOM.prevSiblings = function (ele) {
    // here, we try to get the element in order, from left to right
    var child = ele.parentNode.firstChild,
        result = [];
    while (child !== ele) {
        if (child.nodeType === 1) {
            result.push(child);
        }
        child = child.nextSibling;
    }
    return result;
}

// get all the next siblings
DOM.nextSiblings = function (ele) {
    var result = [],
        child = ele.nextSibling;
    while (child) {
        if (child.nodeType === 1) {
            result.push(child);
        }
        child = child.nextSibling;
    }
    return result;
}

DOM.prev = function (ele) {

}

DOM.next = function (ele) {

}

DOM.closest = function (ele) {

}

// the children node of the parent, if has tag, will limit to that type of node
DOM.children = function (parent, tag) {
    var nodes = parent.childNodes,
        result = [];
    if (typeof tag === 'undefined') {
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === 1) {
                result.push(node);
            }
        }
    } else if (typeof tag === 'string') {
        tag = tag.toUpperCase();
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === 1 && node.tagName === tag) {
                result.push(node);
            }
        }
    } else {
        throw new Error('Wrong second parameter');
    }
    return result;
}

// the Element by Class, ie678 doesn't support this
DOM.getEleByClass = function (className, context) {
    context = context || document;
    if (document.getElementsByClassName) {
        return context.getElementsByClassName(className);
    }
    className = className.replace(/^\s+|\s+$/g, '');
    var classes = className.split(/\s+/);
    var elements = context.getElementsByTagName('*');
    for (var i = 0; i < classes.length; i++) {
        var name = classes[i];
        var reg = new RegExp('(?:^|\\s+)' + name + '(?:\\s|$)');
        var filter = [];
        for (var j = 0; j < elements.length; j++) {
            var node = elements[j];
            if (reg.test(node.className)) {
                filter.push(node);
            }
        }
        elements = filter;
    }
    return elements;
}

DOM.addClass = function (ele, className) {
    var reg = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)');
    if (!reg.test(ele.className)) {
        ele.className += ' ' + className;
        ele.className = ele.className.replace(/^\s+|\s+$/g, '');
    }
}

DOM.removeClass = function (ele, className) {
    var reg = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)');
    ele.className = ele.className.replace(reg, ' ').replace(/^\s+|\s+$/g, '');
}