// Exemplo 1
// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   };
//   console.log(diasDaSemana['1']);

//Exemplo 2
// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
//   let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]);

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },

   };
  // console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');


  // player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; 
  // console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' ' + player.medals.silver + ' medalhas de prata.');

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names){
    console.log('Olá meu nome é ' + '' + names[key])
  }

 
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let key in car) {
    console.log(key, car[key])
  }

  function soma(a,b) {
return a + b;
  }
  console.log(soma())

  const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo);

  // Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function verificaPalindromo (string) {
  for(index in string){
    if (string[index] != string[(string.length -1) - index]){
return false;
    }
  }
  return true;
}
console.log(verificaPalindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4

function maiorIndice (numeros) {
  let maiorIndice = 0
  for (let index in numeros) {
     }
  if (numeros[maiorIndice] < numeros[index])
  maiorIndice = index
  {
  }
  return maiorIndice
    }

    
console.log(maiorIndice[2, 3, 6, 7, 10, 1]); 

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 



function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }

  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
  }
}