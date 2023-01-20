// const sum = (value1, value2) => {
//   console.log(typeof value2)
//   console.log(typeof value1)
//   // if (typeof value1 === 'null' || typeof value2 !== 'null') {
//   //   return 'Favor preencher os dois campos';
//   // }
// };

// console.log(sum(2, ));

// const sum = (value1, value2) => {
//   if(typeof value1 == 'null' || typeof value2 !== 'null'){
//     return "Alerta! Preencher os dois campos!!"
//   }
// }
// console.log(sum(5, ));

// const verifyIsNumber = (value1, value2) => {
//   if (value1) { 
//     throw new Error('Preencha os campos para realizar a soma'); // Lançando erro descritivo
//   }
// }
// console.log(verifyIsNumber(2,))

// //
// const verificaSoma = (value1, value2) => {
//   if(!value1 || !value2){
//     throw new Error('Preencha os dois campos')
//   }
// }
// console.log(verificaSoma(2,))

// // Verifique se os valores inseridos são numéricos:

// const verificaSoma = (value1, value2) => {
//   if(typeof value1 !== 'number' || typeof value2 !== 'number'){
//    throw new Error('Favor inserir números no campo')
//   }
// }
// console.log(verificaSoma(2, '2'))

// //Adicionando throw, try e catch



// const verificaNumeros = (value1, value2) => {
//   if(typeof value1 !== 'number' || typeof value2 !== 'number'){
//     throw new Error('Insira números')
//   }
// }
// const sum = (value1, value2) => {
//   try{
//     return value1 + value2
//   }
// } catch (error){
//   return error.message;}



// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos'); 
//   }
// };

// const sum = (value1, value2) => {
//   try { 
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum(2, '3'));

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  }}
//   // Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
// console.log(Object.keys(order))
// // console.log(order.order.delivery.deliveryPerson);
// // console.log(order.name);

//   const customerInfo = (order) => {
//   const delivery = order.order.delivery.deliveryPerson;
//   const customer = order.name;
//   const phoneNumber = order.phoneNumber;
//   const address = order.address.street
//   const addressNumber = order.address.number;
//   const addressApt = order.address.apartment
//   return `Olá ${delivery}, entrega para ${customer}, Telefone ${phoneNumber}, R. ${address}, ${addressNumber}, ${addressApt}.`
//   }
//   // customerInfo(order);
//   console.log(customerInfo(order))



//  'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
const orderModifier = (order) =>{
const newName = order.name = 'Luiz Silva';
const saborPizza = Object.keys(order.order.pizza)
const bebida = order.order.drinks.coke.type
const preco = order.payment.total = 50;
return `Olá ${newName}, o total do seu pedido de ${saborPizza}, e ${bebida} é R$ ${preco}.`
}
console.log(Object.keys(order))
console.log(order.name)
console.log(order.order.pizza)
console.log(orderModifier(order));