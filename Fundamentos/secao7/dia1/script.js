//Resolução do course
const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

//nome da habilidade e nível

const skills (student) => {
const arrayOfSkills = Object.keys(student);
for (let index = 0; index < student.length; index +=1) {
console.log(`${arrayOfSkills[index]} Nível: ${student[arrayOfSkills[index]]}`);  
}
};
console.log(Estudante 1);
skills(student1);

console.log(Estudante 2);
skills(student2)