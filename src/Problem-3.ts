class Person {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('Mahmudul Alam', 22);
console.log(person1.getDetails());
const person2 = new Person('Shiratonnasa', 20);
console.log(person2.getDetails());