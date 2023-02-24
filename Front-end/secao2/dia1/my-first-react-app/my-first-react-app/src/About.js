import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {Juliana}
        </h1>
        <p>
          {estudante}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{HTML}</li>
          <li>{CSS}</li>
          <li>{JS}</li>                    
        </ul>
      </div>
    );
  }
}

export default About;