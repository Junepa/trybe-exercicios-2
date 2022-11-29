//crie um algoritmo que imprima na tela o fatorial de 10.

//let numeros = [10,9,8,7,6,5,4,3,2,1];
//let fatorial =
//for (index = 0; index < numeros.length; index += 1) {
    //let fatorial *= numeros[index]
//}
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);