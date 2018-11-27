import PokemonsController from '../src/controllers/pokemons.controller'

const moveUp = PokemonsController.moveUp()
const moveLeft = PokemonsController.moveLeft()
test('there are no house to north', () => {
  expect(moveUp).toBeFalsy();
});

test('there are no house to west', () => {
  expect(moveLeft).toBeFalsy();
});

PokemonsController.moveRight()
PokemonsController.moveRight()
PokemonsController.moveRight()
PokemonsController.moveDown()
PokemonsController.moveDown()
PokemonsController.moveLeft()

const visitedList = PokemonsController._visited;
test('the positions visiteds contains 03, 23, 22', () => {
  expect(visitedList).toContain('03');
  expect(visitedList).toContain('23');
  expect(visitedList).toContain('22');
});

PokemonsController.restart()

const totalPokemons = PokemonsController._totalPokemons
test('total of pokemons is 1', () => {
  expect(totalPokemons).toEqual(1);
});