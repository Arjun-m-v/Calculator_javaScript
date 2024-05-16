// // // class Student{
// // //     constructor(){
// // //         console.log("Constructor")
// // //     }
// // //     name='Arjun'
// // //     age=20
// // //     display(){
// // //         console.log("Helloi")
// // //     }
// // // }

// // // s1=new Student()
// // // console.log(s1.name)
// // // console.log(s1.age)
// // // s1.display()


// // class Student{
// //     constructor(n,a){
// //         this.name=n
// //         this.age=a
// //     }
// //     display(){
// //         console.log(`name:${this.name},age:${this.age}`)
// //     }
// // }

// // s1=new Student("arun",20)
// // s1.display()

// class School{
//     sc_name="abrakadaabrah"
// }

// class Student extends School{
//     name="Arjun"
// }

// s1=new Student()
// console.log(s1.sc_name)

baleno={
    manufacture:"suzuki",
    fuel:"petrol",
    color:"black",
    transmission:["manuel","amt"]
}

glanza={
    manufacture:"toyota"
}

glanza.__proto__=baleno

console.log(glanza.color)
console.log(glanza.fuel)
console.log(glanza.transmission)
console.log(glanza.manufacture)
console.log(baleno.color)
console.log(baleno.fuel)
console.log(baleno.transmission)
console.log(baleno.manufacture)


