// class Person {
//   //Properties
//   name = "Mg Mg";
//   age = 25;
//   //Method

//   run() {
//     return "Mg Mg is gay";
//   }
// }

// const person = new Person();
// console.log(person.name);
// console.log(person.age);
// console.log(person.run());

//Person က obj ရဲ့ template ဖြစ်တယ် blueprint လို့လည်းခေါ်တယ်

class Student {
  constructor(name, age, gender, major) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
  }
}

const st1 = new Student("MG MG", 20, "male", "Maths");
console.log(st1);

const ary = ["apple", "banana", "orange"];
console.log(ary.join(" "));
