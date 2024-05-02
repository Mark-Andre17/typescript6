// 1
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    introduce() {
        return `Привет меня зовут ${this.name} и мне ${this.age} лет`
    }
}
let somebody = new Person('Вася', 25);
console.log(somebody.introduce());
// 2
class Student extends Person {
    course: number

    constructor(name: string, age: number, course: number) {
        super(name, age)
        this.course = course
    }
    talkAboutCourse() {
        return `Привет меня зовут ${this.name} и мне ${this.age}. Я учусь на ${this.course} курсе`
    }
}

let student = new Student('Вася', 25, 3);
let anybody = new Person('Илья', 30);
console.log(student.introduce());
console.log(student.talkAboutCourse());
console.log(anybody.introduce());
// console.log(anybody.talkAboutCourse()); // нельзя вызвать метод у родительского класса


// 4
class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    speak() {
        return `Unknown sound`
    }
};
class Dog extends Animal {
    speak() {
        return `Woof, woof!`
    }
}
let dog = new Dog('Шарик', 3);
console.log(dog.speak());
class Cat extends Animal {
    speak() {
        return `Meow, meow!`
    }
};
let animalsArray: Animal[]= [
    new Dog('Шарик', 3),
    new Cat('Мурзик', 2),
    new Animal('Неизвестный', 0),
    new Dog('Хатико', 10),
    new Cat('Белка', 5),
    new Dog('Стрелка', 7)
]
console.log(animalsArray.forEach(
    (animal) => {
        console.log(animal.speak())
    }
));






