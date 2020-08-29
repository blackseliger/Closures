// TODO: write your code here


const findBy = (key, value) => function (key, value) {
  return key.key === `${value}`;
};

// (result) => result.name === 'маг'

const finder = findBy('name', 'заклинание');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);

