import Game from './src/main'

const directions = process.argv[2]

Game.start(directions)
console.log(Game.getTotalPokemons());