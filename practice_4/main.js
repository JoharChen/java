/*
 写一个Person类，要有name，age属性，要有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old.

 再写一个Student类继承Person类，除了name，age属性，还有要有klass属性。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Student. I am at Class 2.


 再写一个Worker类继承Person类，只有name，age属性。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Worker. I have a job.
 */
'use strict'

//Person类
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


//Student类
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let str = super.introduce();
        str = str +(" I am a Student. I am at Class "+this.klass);
        return str;
    }
}
const student = new Student('Tom',21,2);
console.log(student.introduce());

//Worker类
class Worker extends Person{
    introduce(){
        let str = super.introduce();
        str += ' I am a Worker. I have a job.';
        return str;
    }
}
const worker = new Worker('Tom',21);
console.log(worker.introduce());