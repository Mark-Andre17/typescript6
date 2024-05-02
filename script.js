var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "\u041F\u0440\u0438\u0432\u0435\u0442 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this.name, " \u0438 \u043C\u043D\u0435 ").concat(this.age, " \u043B\u0435\u0442");
    };
    return Person;
}());
var somebody = new Person('Вася', 25);
console.log(somebody.introduce());
// 2
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, course) {
        var _this = _super.call(this, name, age) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.talkAboutCourse = function () {
        return "\u041F\u0440\u0438\u0432\u0435\u0442 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this.name, " \u0438 \u043C\u043D\u0435 ").concat(this.age, ". \u042F \u0443\u0447\u0443\u0441\u044C \u043D\u0430 ").concat(this.course, " \u043A\u0443\u0440\u0441\u0435");
    };
    return Student;
}(Person));
var student = new Student('Вася', 25, 3);
var anybody = new Person('Илья', 30);
console.log(student.introduce());
console.log(student.talkAboutCourse());
console.log(anybody.introduce());
// console.log(anybody.talkAboutCourse()); // нельзя вызвать метод у родительского класса
// 4
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.speak = function () {
        return "Unknown sound";
    };
    return Animal;
}());
;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        return "Woof, woof!";
    };
    return Dog;
}(Animal));
var dog = new Dog('Шарик', 3);
console.log(dog.speak());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        return "Meow, meow!";
    };
    return Cat;
}(Animal));
;
var animalsArray = [
    new Dog('Шарик', 3),
    new Cat('Мурзик', 2),
    new Animal('Неизвестный', 0),
    new Dog('Хатико', 10),
    new Cat('Белка', 5),
    new Dog('Стрелка', 7)
];
console.log(animalsArray.forEach(function (animal) {
    console.log(animal.speak());
}));
