import PokemonsController from './controllers/pokemons.controller'

class Game {
    start (directions) {
        /* 
        * Loop over string for to pass in each char.
        */
        [...directions].forEach(direction => {
            switch (direction) {
                case 'N':
                    PokemonsController.moveUp()
                    break
                case 'E':
                    PokemonsController.moveRight()
                    break
                case 'S':
                    PokemonsController.moveDown()
                    break
                case 'O':
                    PokemonsController.moveLeft()
                    break
                default:
                    break
            }
        })
    }

    restart () {
        PokemonsController.restart()
    }

    getVisitedHouses () {
        return PokemonsController._visited
    }

    getTotalPokemons () {
        return PokemonsController._totalPokemons
    }
}

export default new Game()