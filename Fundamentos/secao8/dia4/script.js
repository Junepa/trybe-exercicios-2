// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'maçã', 'pera'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['granola', 'aveia', 'mel'];

// const fruitSalad = (fruit, additional) => {
// const newFruits = [...fruit, ...additional];
// return newFruits;
// };
// console.log(fruitSalad(specialFruit, additionalItens))

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name1: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name1 }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${name1} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

  
