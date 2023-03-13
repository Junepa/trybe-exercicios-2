import validator from 'validator';

const valor = document.getElementById('valor');
const select = document.getElementById('select');
const button = document.getElementById('btn');
const choice = document.getElementById('choice');

button.addEventListener('click', (event) => {
event.preventDefault();

const campos = {
  cpf: validator.isTaxID(valor.value, 'pt-BR'),
  hexColor: validator.isHexColor(valor.value),
  email: validator.isEmail(valor.value),
  uuid: validator.isUUID(valor.value, 4),
  url: validator.isURL(valor.value),
};

textoDeSaida.innerHTML = `A validação retornou ${campos[select.value]}`;
});


