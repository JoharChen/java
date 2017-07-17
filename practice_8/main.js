'use strict'

class Person{
    constructor(name,age){
        this.name = name;
        this.age =age;
    }
    introduce(){
        let str='';
        str = `My name is ${this.name}. I am ${this.age} years old.`;
        return str;
    }
}

class Klass{
    constructor(number){
        this.number = number;
    }
}
let klass = new Klass(2);

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass.number;
    }
    introduce(){
        let str = super.introduce();
        str = str +(" I am a Student. I am at Class "+this.klass);
        return str;
    }
}
let student = new Student('Tom',21,klass);
console.log(student.introduce());

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let str = super.introduce();
        if(this.klass !== null){
            str+=`I am a Teacher. I teach clas ${this.klass}.`;
        }
        else {
            str+=`I am a Teacher. I teach no class.`;
        }

        return str;
    }
    introducwith(student){
        if(student.klass == this.klass){
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`;
        }
        else return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`;
    }
}
let teacher = new Teacher("Tommy",21,2);
console.log(teacher.introduce());
console.log(teacher.introducwith(student));
