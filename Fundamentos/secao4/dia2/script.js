
//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//let searchForFirstTask = tasksList[0];
//console.log(searchForFirstTask);

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let menuServices = menu[1];

//console.log(menuServices);

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let indexOfPortfolio = menu.idexOf('Portfólio');
//console.log(indexOfPortfolio);

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//menu.push ('contato')
//console.log(menu);

//console.log(cars[0]); // Saab
//console.log(cars[1]); // Volvo
//console.log(cars[2]); // BMW

//let cars = ['Saab', 'Volvo', 'BMW'];
//for (let index = 0; index < cars.length; index += 1);{

    //console.log(cars[index]);

    //exercicio 1
    //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    //for(let index = 0; index < numbers.lenght; index += 1){
   //     console.log(numbers[index]);
  // }
 // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 0; index < numbers.length; index += 1) {
  
    // console.log(numbers[index]);
//}

//exercicio - 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;

//for (let index = 0; index < numbers.length; index +=1) {
//    soma += numbers[index]; }
/
 //   console.log(soma)


//exercicio-3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;

//Exercicio-4
//if (media > 20) {
  //  console.log(valor maior que 20)
//}

//else {
   // console.log(valor menor que 20)
//}

//Exercicio -5 // maior valor contido no array, e imprime!
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maiorValor = numbers [0];
//for (numbers = 1; index < numbers.length; index += 1) {
  //  if (numbers[index] > maiorValor) {
    //    maiorValor = numbers[index]
    //}
//}

//Exercício -6
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let resultado = 0
//for (let index=0; index < numbers.length; index += 1){
    //if numbers[index] % 2 !== 0 {
        //resultado +=1
    // }
//} if (numbers[index] % == 0){
    //console.log (nenhum valor ímpar encontrado)
//}

// Exercício -7
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers [0];
for (let index =1; index < numbers.length; index += 1){
    if(number[index] < menorNumero) {
        menorNumero = number [index]
    }
} console.log(menorNumero)

// Exercicio-8
//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.
let resultado = []
for (let index =1; index <= 25; index += 1) {
    let resultado.push(index)

    console.log(resultado)
}

// Exercicio-9
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };