/**
 * Created by caoyangkaka on 3/24/15.
 */
//function Person(name) {
//    this.name = name;
//    this.age = 0;
//}
//
//Person.prototype.eat = function() {console.log('Eating.');}
//
//function FrontEnd(name, degree) {
//    Person.call(this, name);
//    this.degree = degree;
//}
//
//FrontEnd.prototype = new Person;
//
//FrontEnd.prototype.writeJS = function() {
//    console.log('Writing JS.')
//}
//
//var fe = new FrontEnd('Matt', 'MS');
//console.log(fe.hasOwnProperty('name'));
//console.log(fe.hasOwnProperty('degree'));
//console.log(fe.hasOwnProperty('writeJS'));
//console.log(fe);
//console.log(fe.name);
//fe.eat();
//fe.writeJS();


//function Person(name) {
//    this.name = name;
//    this.age = 0;
//    this.height = 1;
//}
//
//Person.prototype.eat = function() {console.log('Eating.');}
//
//function FrontEnd(name, degree) {
//    Person.call(this, name);
//    this.degree = degree;
//}
//
//FrontEnd.prototype.__proto__ = Person.prototype;
//
//FrontEnd.prototype.writeJS = function() {
//    console.log('Writing JS.')
//}
//
//var fe = new FrontEnd('Matt', 'MS');
//console.log(fe.hasOwnProperty('name'));
//console.log(fe.hasOwnProperty('degree'));
//console.log(fe.hasOwnProperty('writeJS'));
//console.log(fe);
//console.log(fe.name);
//console.log(fe.height);
//fe.eat();
//fe.writeJS();

function Person(name) {
    this.name = name;
    this.age = 0;
    this.height = 1;
}

Person.prototype.eat = function() {console.log('Eating.');}

function FrontEnd(name, degree) {
    Person.call(this, name);
    this.degree = degree;
}

FrontEnd.prototype = Person.prototype;

FrontEnd.prototype.writeJS = function() {
    console.log('Writing JS.')
}

var fe = new FrontEnd('Matt', 'MS');
console.log(fe.hasOwnProperty('name'));
console.log(fe.hasOwnProperty('degree'));
console.log(fe.hasOwnProperty('writeJS'));
console.log(fe);
console.log(fe.name);
console.log(fe.height);
fe.eat();
fe.writeJS();

