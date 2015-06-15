## JSON
* It is a just a data format used for exchange, mainly for cross platform.
* a Subset of javascript
* Javascript Object Notation
* Since it is just a format, so there is no thing so-called a JSON object. It is just a javascript in json format
* Rules:
    * attributes must be in Double quotation marks
    * the value must also be quoted by double quotation, unless the value is number, boolean, or null.
    * The attribute value can not be a method, undefined, or NaN.
    * JSON,parse, and JSON.stringify, has compatibility issues. ( not in ie7)
    * JSON.parse(string), if the string is not a valid json format, then this function will throw a error, which is a unexpected token.
    * eval( str ); will not valid, since the {} indicate it is just a code block, and the inside is just a key value pairs, which is not valid in js. so when parse by using the eval, we need do this:
      {
        name: 100
      }, this one is valid, since it indicate a label, but if we add more, it is become not valid
      eval('(' + str + ')');

      Two correct way to present a JSON js object:
      var obj = {name: 'rose', age: 100};
      ;({name: 'rose', age: 100}) // the () usually attached the previous code, we better add ; to divided them into two pieces.
