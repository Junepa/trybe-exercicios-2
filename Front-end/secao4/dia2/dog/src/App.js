import React from 'react';
import 'App.css'
class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };
  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ imageUrl: data.message, isLoading: false }));
  };
  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageUrl');
    if (localStorageUrl) {
      this.setState({ imageUrl: localStorageUrl, isLoading: false });
    } else {
      this.fetchDog();
    }
  }  
  shouldComponentUpdate(nextProps, nextState) {
    // Essa expressão retorna `true` se a string não contiver `terrier`, e `false`, se contiver.  
    return !nextState.imageUrl.includes('terrier');
  }
  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/')[4];
    alert(dogBreed);
 
  }
  
  render() {
    const { imageUrl, isLoading } = this.state;

    // se está carregando, vamos apenas mostrar o Loading
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
        <div>
          <h1 className='dog'>Doguinhos</h1>
          {/* Adiciona um botão para buscar mais um _doguinho_. */}
          <button className='button' type="button" onClick={ this.fetchDog }>
            Novo doguinho!
          </button>
          <div>
            <img className='img' src={ imageUrl } alt="Doguinho aleatório" />
          </div>
        </div>
      );
    }
  }
export default App;
