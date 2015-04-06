/**
 * Created by caoyangkaka on 4/5/15.
 */
function showCart(json) {
    var json = eval(json);
    var html = (json.length == 0)? '<div id="cartHolder">菜篮：空<\/div>>':'菜篮：';
    json.forEach(function (result, index) {
        //var result = JSON.parse(value);
        html += '<br \/>&nbsp;&nbsp;' + result.name + '，' + result.num + '个，' + result.price + '元';
    });
    var cartHolder = document.getElementById('cartHolder');
    cartHolder.style.color = 'red';
    return html;
}

var json1 = "[]";
console.log(showCart(json1));
var json2 = "[{'name':'土豆', 'price':'1', num:'5'}]";
console.log(showCart(json2));
var json3 = "[{'name':'土豆', 'price':'1', num:'5'}, {'name':'西红柿', 'price':'2', num:'3'}]";
console.log(showCart(json3));
