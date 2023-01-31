const primeNumbers = [17, 23, 37]

// const sum = (a, b) => {
//   console.log(a + b);
// }

// sum(primeNumbers[0], primeNumbers[2]) // 54

const [one, two, three] = primeNumbers
const sum = (a, b) => {
  console.log(a + b);
}
sum(one, three)