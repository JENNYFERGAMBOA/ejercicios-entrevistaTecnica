
/* Implementa una función que imprima los números de 1 a n, pero para los múltiplos de 3 imprime fizz en 
vez del número, y para los múltiplos de 5 imprime buzz. Para números que sean múltiplos de ambos 
(3 y 5) debe imprimir fizzbuzz.' */

//alert('funciona ');

function multiplos (n){
    // imprimir numeros de 1 a n
   for(let i=1; i<=n; i++){
        if ( (i % 3) ===0 ){
            //para los múltiplos de 3 imprime fizz
            console.log('fizz');
        }
        //para los múltiplos de 5 imprime buzz
        else if ((i % 5) ===0){
            console.log ('buzz');
        }
        else if ((i % 15) ===0){
            // múltiplos de ambos (3 y 5) debe imprimir fizzbuzz
            console.log('fizzbuzz');
        }
        else{
            console.log(i);
        }
    }
};

multiplos(50);
