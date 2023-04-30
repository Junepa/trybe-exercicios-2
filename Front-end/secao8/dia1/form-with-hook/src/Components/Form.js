import React from 'react';
import { useState } from 'react';

function Form () {
// Input do tipo text contendo o nome completo;
const [studentInfo, setStudentInfo] = useState({
  name: '',
  age: '',
  city: '',
  module: '',
})

const handleChange = (target) => {
const { name, value } = target
setStudentInfo((prevState) => ({
...prevState,
[name] : value
}))
}
return (
    <form>
      <label htmlFor='name'>
      Nome completo
        <input 
        type='text'
        value={studentInfo.name}
        onChange={handleChange}
        name='inputName'
        
        />
      </label>

      <label>
        Idade:
        <input 
        type='number'
        value={studentInfo.age}
        onChange={handleChange}
        name='inputAge'
        />
      </label>
      <label>
        Cidade:
        <input 
        type='text'
        value={studentInfo.city}
        onChange={handleChange}
        name='inputCity'
        />
      </label>

      <label>Fundamentos
        <input 
        type='radio'
        value={studentInfo.module}
        onChange={handleChange}
        name='inputFund'
        />
      </label>

      <label>Front-end
        <input 
        type='radio'
        value={studentInfo.module}
        onChange={handleChange}
        name='inputFront'
        />
      </label>

      <label>Back-end
        <input 
        type='radio'
        value={studentInfo.module}
        onChange={handleChange}
        name='inputBack'
        />
      </label>

      <label>Ciência da Computação
        <input 
        type='radio'
        value={studentInfo.module}
        onChange={handleChange}
        name='inputCiencComp'
        />
      </label>
      <button
      type='button'>
      Enviar dados  
      </button>
    </form>
  )
};

export default Form;