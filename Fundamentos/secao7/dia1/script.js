const sum = (value1, value2) => {
  if (typeof value1 == 'null' || typeof value2 !== 'null') {
    return 'Favor preencher os dois campos';
  }
};

console.log(sum(2, ));

const sum = (value1, value2) => {
  if(typeof value1 == 'null' || typeof value2 !== 'null'){
    return "Alerta! Preencher os dois campos!!"
  }
}
console.log(sum(5, ));

const verifyIsNumber = (value1, value2) => {
  if (!value1 || !value2) { // A condição do if só será satisfeita se ao menos um dos campos não tenha sido preenchido
    throw new Error('Preencha os campos para realizar a soma'); // Lançando erro descritivo
  }
}

const verificaSoma = (value1, value2) => {
  if(!value1 || !value2){
    throw new Error('Preencha os dois campos')
  }
}

// Verifique se os valores inseridos são numéricos:

const verificaSoma = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number'){
    return ('Favor inserir números no campo')
  }
}
console.log(verificaSoma(2, '2'))

