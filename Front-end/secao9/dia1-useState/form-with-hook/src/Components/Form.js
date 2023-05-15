import React, { useState } from 'react'
// import { useState } from 'react';

 function Form() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [location, setLocation] = useState('')
  const [module, setModule] = useState ('')
 
  return (
    <div>
<form>
  <label htmlFor='name'>
    Nome Completo
    <input
    type='text'
    name='name'
    value={name}
    onChange={({target}) => setName(target.value)}
    />
  </label>
  Cidade:
  <label>
    <input 
    type='text'
    name='city'
    value={city}
    onChange={({target})=> setCity(target.value)}
    />
  </label>
  <label>
    Localização
    <input 
    type='text'
    name='location'
    value={location}
    onChange={({target}) => setLocation(target.value)}
    />
  </label>
<label>
  Fundamentos
  <input 
  type='radio'
  value={module}
  onChange={({target}) => setModule(target.value)}
  />
</label>
<label>
  Front-end
  <input 
  type='radio'
  value={module}
  onChange={({target}) => setModule(target.value)}
  />
</label>
<label>
  Back-end
  <input 
  type='radio'
  value={module}
  checked={module==='Bak-end'}
  onChange={({target}) => setModule(target.value)}
  />
</label>
<label>
  Ciência da Computação
  <input 
  type='radio'
  value='Ciência da Computação'
  checked={module==='Ciência da Computação'}
  onChange={({target}) => setModule(target.value)}
  />
</label>

</form>

    </div> // criar um estado no form que será responsável por armazenar as informações dos inputs
  )
}
export default Form;