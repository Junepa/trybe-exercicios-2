function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()
  
    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa = {
      nome: 'Luna',
      idade: 19
    } // Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);
  
    let favoriteFood = 'Lasanha';
    favoriteFood = 'Hamburguer';
    console.log(favoriteFood);
  
    // template literals
    const name = 'Adriana';
    const lastName = 'Soares';
    console.log(`Olá, ${name} ${lastName}!`)
    //console.log('Olá' + ',' + name + ' ' + lastName + '!'); `Olá ${name} ${lastName}!`
   
    function soma(a,b) {
      let resultado = a + b;
      return resultado;
    }
    let a = 3;
    let b = 5;
    //console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
    console.log(`O resultado da soma de ${a} + ${b} é ${soma(a,b)}`)

    const numeroAleatorio = () => Math.random()
        console.log(numeroAleatorio());
   

let hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));  
        
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
 let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

let speed = 90;
const speedCar = (speed) => (
    speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
         );
  
 console.log(speedCar(speed));


// Parte 2
let status = 'desligado';
const = ligarDesligar() => 
status === 'O motor está ligado' : 'O motor está desligado'
console.log(motorLigado);
let status = ' '
}

let status = 'desligado';
const ligarDesligar = () => (
  status === 'desligado' ? status = 'ligado' : status = 'desligado'
)

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado