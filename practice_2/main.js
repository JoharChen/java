/*
写一个Person类，要有name，age属性，要有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old.

    再写一个Student类，有name，age，klass属性(因为class是保留字，所以使用klass)。也有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old. I am a Student. I am at Class 2.
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


