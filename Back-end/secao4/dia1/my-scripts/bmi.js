const weightInKg = 47; 
const heightInCm = 160; 


function handleBMI(weight, height) {
  const heightInMeters = height/100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight/heightSquared;
  return bmi
}

function main() {
  const bmi = handleBMI(weightInKg, heightInCm)
  console.log(`BMI: ${bmi.toFixed(2)}`);
}
main()
