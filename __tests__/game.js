import Game from '../src/main'

Game.start('ABCDFGHIJKLMPQRTUVXYWZ')
const totalPokemons = Game.getTotalPokemons()
const totalVisitedHouses = Game.getVisitedHouses()

test('total pokemons is 1', () => {
    expect(totalPokemons).toEqual(1);
})

test('total of visited houses', () => {
    expect(totalVisitedHouses.length).toEqual(1);
})
