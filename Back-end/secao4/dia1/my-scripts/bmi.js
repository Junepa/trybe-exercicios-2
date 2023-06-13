const readline = require('readline-sync');

// const weightInKg = 47; 
// const heightInCm = 160; 


function handleBMI(weight, height) {
  const heightInMeters = height/100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight/heightSquared;
  return bmi
}

function main() {
  const weight = readline.questionInt('Qual é o seu peso em kg?')
  const height = readline.questionInt('Qual é a sua altura em cm?')
  // const weight = readline.questionInt('What\'s your weight? (kg) ');
  // const height = readline.questionInt('What\'s your height? (cm) ');

  const bmi = handleBMI(weight, height);
  // const bmi = handleBMI(weightInKg, heightInCm)
  console.log(`BMI: ${bmi.toFixed(2)}`);
}
main()
