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

function funcion1 () {
    //Estas variables solo estan disponible para la función;
    var a = 2;

    function funcion3() { // function nested;
        var b = 5;

        function funcion5() { // function nested of function3;
            console.log(a, b);
        }
    };
}



function funcion2 () {

 var a = 3;

    function funcion4() {
        console.log(a);
    };
}


funcion1();
funcion2();