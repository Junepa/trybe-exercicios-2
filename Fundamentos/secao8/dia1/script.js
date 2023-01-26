// // const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// // arrayOfValues.forEach((element, index) => {
// //   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// // });

// // const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// // pessoasAprovadas.forEach(() => {});

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];
// emailListInData.forEach((elemento) => console.log(`O email é ${elemento}`)
// )

// // const msg = (email) => {
// // console.log(`O e-mail para ${email} foi enviado com sucesso!`)
// // };
// // emailListInData.forEach(msg);

// emailListInData.forEach((elemento) => console.log(`o email para ${elemento} mfjdrgnel`)
// )


// // emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));


// // const verify = () => {

// // }


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifica = numbers.find((elemento) => elemento % 3 === 0 && elemento % 5 === 0
// )
// console.log(verifica)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const fiveletters = names.find((elemento) => names.length === 5
// )
// console.log(fiveletters)

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// const musica = musicas.find((elemento) =>
//   elemento.id === '31031685');
// console.log(musica);
// // const findMusic = musicas.find((musica) => musica.id === '31031685');

// //SOME booleano retorna T ou F caso uma condição seja atendida:

// const nameshas = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const confirma = (arr, name) => {
//   return arr.some((nome) => nome === name)
// }
// console.log(confirma(names, 'Ana')); // true
// console.log(confirma(names, 'Pedro')); // false



// const hasName = (arr, name) => {
//   return arr.some((currentName) => currentName === name);
// };

// console.log(hasName(names, 'Ana')); // true
// console.log(hasName(names, 'Pedro')); // false

// // crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// // utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
// const colaborador = (nome) => {
// const colabArray = [nome];
// colabArray.forEach((elemento) => {
// return `${elemento}`
// });
// }
// const newEmployees = () => {
//   const employees = {
//     id1: colaborador('Pedro Guerra'),
//     id2: '',
//     id3: '', 
//   }
//   return employees;
// };

// function colaborador=(fullName) => {
// // console.log(`${colaborador}, ${email}`)
// }
// const newEmployees = () => {
//   const employees = {
//     id1: colaborador('Pedro Guerra'),
//     id2: '',
//     id3: '', 
//   }
//   return employees;
// };

const numeros = [1,2,3,4,5];
const numeroSorteado = Math.random(numeros);
const numeroApostado = Math.random(numeros);
const checa = () => {
if(numeroApostado === numeroSorteado) {
  console.log('Parabéns, você ganhou!')
else{
  console.log('Tente novamente!')
}
}
numeros.forEach((elemento, (checa)) => {

})