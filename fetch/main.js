fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/212')
  .then(res => res.json())
  .then(pokemon => console.log(pokemon))
  .catch(err => console.error(err));
