import Swal from 'sweetalert2';
import './style.css';

const button = document.getElementById('btn');
const heroName = document.getElementById('name');
const img = document.getElementById('img');

const API = 'https://akabab.github.io/superhero-api/api';
const allHeroes = `${API}/all.json`;
console.log(allHeroes)

button.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 731) + 1;
  fetch(`${API}/id/${id}.json`)
    .then(response => response.json())
    .then(data => {
      img.src = data.images.md
      heroName.innerHTML = data.name
    })

    .catch(error => {
      Swal.fire({
        title: 'Herói inválido!!!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
      })
    })
});