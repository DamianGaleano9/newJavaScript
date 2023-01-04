// #1
// ReferenceError : identificador is not defined  
 
// function greetting() {
//     var message = "this code is inside a function";

//     console.log(message); // here we are calling the variable;
// };

// console.error(message); // message is not defined here is just a text 

// var numero = 9;

// function showNumber () {
//     console.log("the number is " + numero);

// };


// //variable is just available inside a function
// showNumber(numero);

// function funcion1 () {
//     //Estas variables solo estan disponible para la función;
//     var a = 2;

//     function funcion3() { // function nested;
//         var b = 5;

//         function funcion5() { // function nested of function3;
//             console.log(a, b);
//         }
//     };
// }



// function funcion2 () {

//  var a = 3;

//     function funcion4() {
//         console.log(a);
//     };
// }


// funcion1();
// funcion2();

/* create a constant through the const statement */

// var name = 'Damian';
// let lenguaje = 'javaScript';

// name = 'Salvador';
// lenguaje = 'Pyhton';

// console.log(name);
// console.log(lenguaje);



// const pi = 3.141592;

// pi = 8.13; // We cannot change the value for the const;



//LITERALS

// 'JavaScript';
// "javaScript";


// new String('javascript');
// String('javaScript');


// [1,2,3,4];
// new Array(1,2,3,4);

// {id: 1, name: 'Damian'};

// let person = {id: 1, name: 'salvador'};
// person1 = new Object();


// person1.name = "Damian";
// person1.id = 9;
// person1.lastName = 'Galeano';




// console.log(person1);

//check if a function has a value assigned


// let a;
// let b = 9;

// if(a === undefined) {
//     console.log('the variable a still does not exist');
// }  else { 
//     console.log('the variable has a value assigned');
// }


let a;
let b = 11;

console.log(typeof a);
console.log(typeof b);


if(typeof a === undefined) {
    
}