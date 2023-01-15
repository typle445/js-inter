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

// class Student {
//   constructor(name, age, gender, major) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.major = major;
//   }
// }

// const st1 = new Student("MG MG", 20, "male", "Maths");
// console.log(st1);

// const ary = ["apple", "banana", "orange"];
// console.log(ary.join(" "));
let MMKInput = document.querySelector("#MMK-Input");
let Btn = document.querySelector("#Btn");
let USDT = document.querySelector("#USDT");
let Exchange = 2250;
Btn.addEventListener("click", () => {
  if (MMKInput.value){
    let USD = MMKInput.value / Exchange;
    console.log(USD);
    USDT.innerText=USD.toFixed(2);
    MMKInput.value=null;
  }else {
    alert("Add Your MMK")
  }
});

let SS = document.querySelector('.SS')
SS.addEventListener('mouseenter',()=>{
  SS.style.background='Blue';
  SS.style.transition='0.5s'
});
SS.addEventListener('mouseleave',()=>{
  SS.style.background='Orange';

})