// // let comida = 'gato';
// // let animal = 'água';
// // let bebida = 'arroz';

// // const values = ['arroz', 'gato', 'agua'];
// // const ['arroz', 'gato', 'agua'] = values
// // const [one, two, three] = values;

// // let comida = one
// // let animal = two
// // let bebida = three


// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';



// [comida, animal, bebida] = [bebida, comida, animal]; 
// console.log(comida, animal, bebida); 

// [1, 3, 5, 6, 8, 10, 12];
// let [um, dois, tres, quatro, cinco, seis] = numerosPares;

// [,,, ...numerosPares] = numerosPares
// console.log(numerosPares); 


const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
console.log(getNationality(person));

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));