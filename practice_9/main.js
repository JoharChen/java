/**
 * Created by joharchan on 17-7-17.
 */
'use strict'

class Person{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        let str = `My name is ${this.name}. I am ${this.age} years old.`;
        return str;
    }
}


class Klass{
    constructor(number){
        this.number = number;
    }
    assignLeader(studentInstance){
        this.leader = studentInstance.name;
    }
}
const klassInstance = new Klass(2);


class Student extends Person{
    constructor(id,name,age,klassInstance){
        super(id,name,age);
        this.klass = klassInstance.number;
    }
    introduce(){
        let str = super.introduce();
        if(studentInstance.name == 'Tom'){
            str+=`I am a Student. I am Leader of Class ${this.klass}`;
            return str;
        }else{
            str+=`I am a Student. I am at Class ${this.klass}.`;
            return str;
        }
    }
}
const studentInstance= new Student(1,'Tom',21,klassInstance);
console.log(studentInstance.introduce());

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        let str = super.introduce();
        if(this.klass == null){
            str +=` I am a Teacher. I teach No Class.`;
            return str;
        } else {
            str += ` I am a Teacher. I teach Class ${this.klass}.`;
            return str;
        }
    }
}
const teacherInstance = new Teacher(2,'Tommy',22,2);
console.log(teacherInstance.introduce());