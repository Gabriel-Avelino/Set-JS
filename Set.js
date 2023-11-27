const person = {
    'name': 'Alex',
    'age': 32
  };
 
 // Cria um set e adiciona o objeto a ele
const pSet = new Set();
pSet.add(person);
console.log(pSet);

person.name = 'Bob';

// Adiciona o objeto pessoa ao set novamente
pSet.add(person);
console.log(pSet);