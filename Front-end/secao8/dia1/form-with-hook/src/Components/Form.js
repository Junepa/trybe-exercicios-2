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

const handleChange = ({target}) => {
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
        name='name'
        
        />
      </label>

      <label>
        Idade:
        <input 
        type='number'
        value={studentInfo.age}
        onChange={handleChange}
        name='age'
        />
      </label>
      <label>
        Cidade:
        <input 
        type='text'
        value={studentInfo.city}
        onChange={handleChange}
        name='city'
        />
      </label>

      <label>Fundamentos
        <input 
        type='radio'
        value='Fundamentos'
        onChange={handleChange}
        name='module'
        checked={studentInfo.module === 'Fundamentos'}
        />
      </label>

      <label>Front-end
        <input 
        type='radio'
        value='Front-end'
        onChange={handleChange}
        name='module'
        checked={studentInfo.module === 'Front-end'}
        />
      </label>

      <label>Back-end
        <input 
        type='radio'
        value='Back-end'
        onChange={handleChange}
        name='module'
        checked={studentInfo.module === 'Back-end'}
        />
      </label>

      <label>Ciência da Computação
        <input 
        type='radio'
        value='Ciência da Computação'
        onChange={handleChange}
        name='module'
        checked={studentInfo.module === 'Ciência da Computação'} 
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