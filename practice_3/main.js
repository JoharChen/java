/**
 * Created by joharchan on 17-7-17.
 */
'use strict'


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        let str="My name is " + this.name + ". I am " + this.age + " years old.";
        return str;
    }
}
const person = new Person('Tom',21);
console.log(person.introduce());

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let str = super.introduce();
        str = str +(" I am at Class "+this.klass);
        return str;
    }
}
const student = new Student('Tom',21,2);
console.log(student.introduce());
