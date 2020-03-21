import Zombie from '../Zombie';
import Team from '../team';

test('Проверка Team на добавление одного персонажа', () => {
  const zombie = new Zombie('Wolking Dead', 'Zombie');
  const team = new Team();
  team.add(zombie);
  const received = team.toArray();
  const expected = [
    {
      name: 'Wolking Dead',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление нескольких одинаковых персонажей', () => {
  const zombie1 = new Zombie('Wolking Dead', 'Zombie');
  const zombie2 = new Zombie('Wolking Dead', 'Zombie');
  const team = new Team();
  team.addAll(zombie1, zombie2);
  const received = team.toArray();
  const expected = [
    {
      name: 'Wolking Dead',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Wolking Dead',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление нескольких разных персонажей', () => {
  const zombie1 = new Zombie('Wolking Dead', 'Zombie');
  const zombie2 = new Zombie('Dead Wolking', 'Zombie');
  const team = new Team();
  team.addAll(zombie1, zombie2);
  const received = team.toArray();
  const expected = [
    {
      name: 'Wolking Dead',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Dead Wolking',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление уже существующего персонажа', () => {
  const zombie = new Zombie('Wolking Dead', 'Zombie');
  const team = new Team();
  team.add(zombie);

  expect(() => {
    team.add(zombie);
  }).toThrow();
});
