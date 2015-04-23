# Review About Javascript

##1. Javascript Variable Type
1. Basic variable type:
    - number
    - boolean
    - string
    - null
    - undefined
2. Reference type:
    - object
    - function
3. in the number, there is one special thing called NaN:
    - `NaN == NaN  // return false`
    - `isNaN() // to test whether the data is a number type`
    - `number + undefined = NaN`

 NaN may be shown when other type want transfer to number, there are two type of number transfer:
    1. strong transfer: Number(other type), if not a valid, return NaN
    2. weak transfer: parseInt(), parseFloat(), parse from left to right, return the valid one up till now

##2. Javascript Object and Function
1. 2 ways to build a js Object:
    - literal way
            var obj = {};
    - constructor with the key word `new`
            var obj = new Object; // if new parameter, will can omit the () after the Object
2. Object is paired with many key and value pair, which is a way to store the data and value.
3. If the parameter is not given, then an **undefined** value will be given. It means when build a new object, it will initialize all the value, and if no value given, the undefined will be given.
3. arguments Object from function:
    - it is an array-like object
    - so it is index by number from 0
    - has the length attribute
    - has a callee(refer the function itself, suggest not use it)
    - caller(removed)

##3. Javascript Array
####Array is an Object and has 12 methods included.


Method | Syntax | summary | parameters | return | notice
---|---|---|---|---|---|
concat | `var new\_array = old_array.concat(value1[, value2[, ...[, valueN]]])` | returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments | *valueN*: Arrays and/or values to concatenate into a new array | the new built array | shallow copy
push | `arr.push(element1, ..., elementN)` | The push() method adds one or more elements to the end of an array and returns the new length of the array | *elementN*:The elements to add to the end of the array | The new length property of the object upon which the method was called | change the original array
pop | `arr.pop()` | The pop() method removes the last element from an array and returns that element | | return the removed element value if pop an empty array, it will return an undefined value. | can be used in the array-like object by call/apply
shift | `arr.shift` | The shift() method removes the first element from an array and returns that element. This method changes the length of the array. | | same as pop | same as pop
unshift | `arr.unshift([element1[, ...[, elementN]]])` | he unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. | *elementN*:The elements to add to the front of the array. | The new length property of the object upon which the method was called. | same as pop
slice | `arr.slice([begin[, end]])` | The slice() method returns a shallow copy of a portion of an array into a new array object. | *begin*: Zero-based index at which to begin extraction.<br> *end*: Zero-based index at which to end extraction. slice extracts up to but not including end. | return a shallow copy | 1. slice does not alter. It returns a shallow copy of elements from the original array.  2. the base number can be negative
splice | `array.splice(start, deleteCount[, item1[, item2[, ...]]])` | The splice() method changes the content of an array by removing existing elements and/or adding new elements. | *start*:Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.<br>*deleteCount*:An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at start, then all of the elements through the end of the array will be deleted.<br>*itemN*:The element to add to the array. If you don't specify any elements, splice() will only remove elements from the array. | An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned. | length will be changed if necessary
join | `str = arr.join([separator = ','])` | The join() method joins all elements of an array into a string. | *separator*: optional, default is comma. | the built string is returned |
sort | `arr.sort([compareFunction])` | The sort() method sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points. | | | in place sort
reverse | `arr.reverse()` | he reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first. | | | in place reverse
indexof | `arr.indexOf(searchElement[, fromIndex = 0])` | The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. | *searchElement*:Element to locate in the array.<br>*fromIndex*:The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched. Default: 0 (entire array is searched). | index |  the comparison is strict comparison, ===

##4. Special case for isNaN:
> The role of this one is: using the strict transfer to transfer the type to the number.

    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true
    isNaN(true);      // false
    isNaN(false)      // false
    isNaN(null);      // false
    isNaN(37);        // false

    // strings
    isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
    isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
    isNaN("");        // false: the empty string is converted to 0 which is not NaN
    isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN

    // dates
    isNaN(new Date());                // false
    isNaN(new Date().toString());     // true

    // This is a false positive and the reason why isNaN is not entirely reliable
    isNaN("blabla");   // true: "blabla" is converted to a number.
                  // Parsing this as a number fails and returns NaN

##5. Everything About String
1. using the `\`to escape some characters like `"`
2. Typeof operator:
        typeof '12'; // string
        typeof (1+undefined); // number
        typeof []; // object
        typeof null; // object
        typeof undefined; // undefined


##6. Data Type Transfer
    //boolean -> number -> object -> string
    digital + null = digital, //null is equal to 0 here
    NaN + 'a" = 'NaNa'
    string + [] = string // string
    string + {} = string[object Object] //string
    digital + {} = digital[object Object] //string
    digital + [] = digital // string
    1 + [1,2,3] = 11,2,3 // both transfer to string
    'a' + null = 'anull' // string
    'a' + undefined = aundefined // string also
    {} + [] = 0;
    {} + null = 0;
    {} + undefined = NaN
    [] + null = null // string

##7. Data comparison
    ({} == '[object Object]' )//true object compare with string, object transfer to string
    [] == 'true' // return false
    ([] == true) // false [] transfer to string then using the Number('') = 0
    //so compare object and boolean, object transfer to string then using the Number - strong number transfer
    //object and digital, transfer the object to  and then do the comparison
    //digital and boolean, boolean transfers to number first and do the comparison
    //boolean and string, transfer to number
    null == undefined
    //null and undefined compare with other type of data type is false
    null == 0 //false
    null == ''//false
    undefined == 0 //false
    //number and string: both transfer to number and do the comparison
    //for summary, 0 NaN '' null undefined, is false

##8 Everthing about Math Object
####Math has 5 methods:

Method | Syntax | summary | parameters | return | notice
---|---|---|---|---|---|
ceil | `Math.ceil(x)` | The Math.ceil() function returns the smallest integer greater than or equal to a given number. | |  |
floor | `Math.floor(x)` | The Math.floor() function returns the largest integer less than or equal to a given number | | |
round | `Math.round(x)` | The Math.round() function returns the value of a number rounded to the nearest integer. | | |
abs | `Math.abs(x)` | The Math.abs() function returns the absolute value of a number | | |
random | `Math.random()` | The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1)  | |  |`function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min;}`

##9 Everthing about String Object
####String has 10 methods:

Method | Syntax | summary | parameters | return | notice
---|---|---|---|---|---|
charAt | `str.charAt(index)` | The charAt() method returns the specified character from a string. | *index*: An integer between 0 and 1-less-than the length of the string. | return the specific character if nothing then return an empty string |
substring | `str.substring(indexA[, indexB])` | The substring() method returns a subset of a string between one index and another, or through the end of the string. | *indexA*: An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.<br>*indexB*: Optional. An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring. |  | ![notice](image1) Like the slice in array, but not support the negative index
substr | `str.substr(start[, length])` | The substr() method returns the characters in a string beginning at the specified location through the specified number of characters. | *start*: Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength = to the length of the string (for example, if start is -3 it is treated as strLength - 3.) *length*: Optional. The number of characters to extract. | |
indexOf | `str.indexOf(searchValue[, fromIndex])` | | *searchValue*:A string representing the value to search for. *fromIndex*: Optional. The location within the calling string to start the search from. It can be any integer. The default value is 0. If fromIndex < 0 the entire string is searched (same as passing 0). If fromIndex >= str.length, the method will return -1 unless searchValue is an empty string in which case str.length is returned. | return index if nothing, then return -1 | the `str.indexOf('') return the length
lastIndexOf | `str.lastIndexOf(searchValue[, fromIndex])` | The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at fromIndex. | *searchValue*: A string representing the value to search for.*fromIndex*: Optional. The location within the calling string to start the search at, indexed from left to right. It can be any integer. The default value is str.length. If it is negative, it is treated as 0. If fromIndex > str.length, fromIndex is treated as str.length. | | indexOf and lastIndexOf are both case-sensitivity
toLowerCase/toUpperCase | `str.toLowerCase()` | | | |
charCodeAt | `str.charCodeAt(index)` | The charCodeAt() method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000). | *index*:An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0. | |
split and replace will be details shown in the regular expression part. | | | | |

##10 Everthing about DOM
####DOM has 8 methods:

Method | Syntax | summary | parameters | return | notice
---|---|---|---|---|---|
Document.getElementById() | `element = document.getElementById(id)` | Returns a reference to the element by its ID. | *id*: a case-sensitive string representing the unique ID of the element being sought. | *element*: a reference to an Element object, or null if an element with the specified ID is not in the document. | 1. return just one element. 2. if id is replicated, then choose the first one. 3. in ie6-7, id is not case-senstive.
getElementsByTagName() | `var elements = document.getElementsByTagName(name)` | *name*:  a string representing the name of the elements. The special string "*" represents all elements. | *elements*: elements is a live HTMLCollection of found elements in the order they appear in the tree. | | This method returns a NodeList in WebKit browsers
 document.getElementsByName | `elements = document.getElementsByName(name) ` | *name*: the value of the name attribute of the element. | *element*: an live NodeList Collection | |  The getElementsByName method works differently in different browsers. under IE, only works for form elements.
document.body | | return the &lt;body\> node of the current document | | |  document.documentElement.clientWidth OR document.body.clientWidth
document.getElementsByClassName | `var elements = rootElement.getElementsByClassName(names);` | Returns an array-like object of all child elements which have all of the given class names.  |  *names*: names is a string representing the list of class names to match; class names are separated by whitespace | *elements*: elements is a live HTMLCollection of found elements. | support on the standard browser
document.querySelector | `element = document.querySelector(selectors);` | Returns the first element within the document (using depth-first pre-order traversal of the document's nodes) that matches the specified group of selectors. | *selector*: is a string containing one or more CSS selectors separated by commas. | *element*: | using the css selector
document.querySelectorAll()  | `elementList = document.querySelectorAll(selectors);` | Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a NodeList. | *selectors*: is a string containing one or more CSS selectors separated by commas. | *elementList*: is a non-live NodeList of element objects. |  If the selectors string contains a CSS pseudo-element, the returned elementList will be empty.

####DOM attributes with 7:
    childNodes, //return an array-like object. get all of the child node under the parent. li, text, comment, under ul
    children //get all the element node under the parent
    parentNode //get the parent node
    previousSibling, nextSibling, //get the
    firstChild, lastChild
    firstElementChild, lastElementChild(element node) //bad compatible, so usually not used

####DOM node and node type:
Value | element node | content node | comment node | document
---|---|---|---|---|---|
nodeType | 1|3|8|9
nodeName |tagName|#text | #comment|#document
nodeValue|null|the content|the comment|null
> Notice: in the standard browser, (except ie 678), treat the space and return as the text node.


####DOM create element
    odiv = document.createElement('tagname');  // create an element node
    oDiv.id = 'name';
    oDiv.style.width = '100px';

####DOM put the element in the DOM:
    document.body.appendChild(odiv);
    document.body.insertBefore(newNode, oldNode(insert it before)); //In mozilla Firefox, if referenceElement is null, newElement is inserted at the end of the list of child nodes. In Internet Explorer, an undefined value as referenceElement will throw an "Invalid argument" exception, while in Chrome it will throw an "Uncaught TypeError" since it expects both the arguments.
    oText = document.createTextNode('content'); // the content is must under standard bowser.
    oText.nodeValue += 'append';//This dynamic dom built costs a lot of resource. We better just use the div and give it the innerHTML.

####DOM delete and update in DOM:
    originalNode.cloneNode(); // the clone id will be same. we better change it.
    node.cloneNode(true/false),; //default false, will just copy the specific element. True will clone the current and all childNodes insides
    odiv1.parentNode.replaceChild(odiv4(newOne), odiv(oldOne));
    node.parent.removeChild(node)

####DOM set attribute:
    div.setAttribute('attribute name', value); // show in the html file. In ie6-8, it cannot use to set the class.
    div.attributeName = value; // cannot change the html
    div.getAttribute('attribute name');
    div.removeAttribute('attribute name');


##11 Everything about Date

    var a = new Date();
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var day = a.getDay(); // week, 0 is Sunday
    var hours = a.getHours();
    var min = a.getMinutes();
    var ms = a.getMilliseconds();
    var m = a.getTime(), // 1970,1,1 mili-seconds
    var now = Date.now(); //new Date().getTime();
    new Time('2014-12-23 12:00:00'); //set time in string format
    Date.parse('2014-12-23 12:00:00'); //get the result of 1970 1 1 miliseconds
    // under the standard browser, we use the -, but in ie6-8, it doesn't support. 2014/11/12 12:00:00,  this can be figured by old ie.

##12 methods to check the datatype IN Javascript:
1. using the `typeof`:
        typeof 1; // return number
        typeof 'a'; // return string
        typeof true; // return boolean
        typeof undefined; // return undefined
        typeof null; // return object
        typeof new Function(); // return function
    >we can see from these, the typeof only show the basic datatype, but if we want to see the details of the object, we need use the other methods.
2. using the `instanceof`:
>basic on the prototype chain, it finds the parent type.
3. using the `constructor`:
In javascript, every object(has been initialized or we can call it instance of an Class) has a constructor attribute, this attribute will help us to get what kind of object it is belonging. Besides, it also work fro the function.
        //alert(1.constructor); the number literal don't have the constructor
        var num = 1;
        num.constructor == Number; // return Number
        'a'.constructor == String; // return String
        var b = null;
        b.constructor; // null doesn't has constructor
        var none = undefined;
        none.constructor; // undefined doesn't has constructor
        function fn() {};
        (new fn).constructor == fn; //return true function fn(){}
>Notice here, this method cannot handle the prototype chain properly.

        function Animal(){};
        function Cat(){};
        Cat.prototype = new Animal();
        var obj = new Cat();
        console.log(obj.constructor == Cat); // return false
        console.log(obj.constructor == Anmial); // return true
4. using the `Object.toString`:
    > In ECMA-262:
    > When the toString method is called, the following steps are taken:
    >1. Get the [[Class]] propert of this object
    >2. Compute a string value by concatenating the three strings, '[object', result1, ']'.
    >3. return the result2

    Here we will give an example:
        function isArray(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }

##12 Others

    typeof argu != 'undefined'; //判断是否没有输入参数， 用
    timer = setTimeOut(); //timer is index from 1 to indicate the timer.when delete the time,first, clearTimeOut(timer), or clearInterval(timer), then timer = null.
1. `document.getElementsByTagName` return a array-like object.
2. in the return object, we can access it by `olist[index]` or by `olist.item(index)`. Only in the dom elements.
3. `dom.style`, the details of style only shows the style defined inline.
4. in switch, the value comparison is using the `strict comparison`.
5. `==`, do the implicit strong transfer to do the comparison
6. `===`, check the type and value, don't transfer
7.



- [ ] 8. 扩展：在js中拼接html字符串的时候涉及的字符串拼接的4条黄金法则（项目实战中非常的重要）
- [x] 9. 检测数据类型的4种方式，作用和局限性
- [ ] 10. 关于数组的常用的方法(each、交差并补集等)
- [ ] 11. 重点的编程思想：自定义属性
