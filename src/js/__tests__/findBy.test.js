import findBy from '../findBy';

describe('check work func findBy', () => {
  test('return array', () => {
    const expected = [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }];
    const finder = findBy('name', 'заклинание');
    const received = [
      { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
      { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
      { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
    expect(received).toEqual(expected);
  });
});
