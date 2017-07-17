/**
 * Created by joharchan on 17-7-17.
 */
'use strict'

//Person类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    basicIntroduce() {
        let str="My name is " + this.name + ". I am " + this.age + " years old.";
        return str;
    }
}
const person = new Person('Tom',21);
console.log(person.basicIntroduce());


//Student类
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let str = super.basicIntroduce();
        str = str +(" I am a Student. I am at Class "+this.klass);
        return str;
    }
}
const student = new Student('Tom',21,2);
console.log(student.introduce());

//Worker类
class Worker extends Person{
    introduce(){
        let str = super.basicIntroduce();
        str += ' I am a Worker. I have a job.';
        return str;
    }
}
const worker = new Worker('Tom',21);
console.log(worker.introduce());