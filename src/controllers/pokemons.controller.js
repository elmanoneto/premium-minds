import * as util from './../utils/utils'

class PokemonsController {
    constructor () {
        this._visited = ['00']
        this._board = [0, 0]
        this._totalPokemons = 1
    }

    restart () {
        this.setTotalPokemons = 1
        this._board = [0, 0]
        this._visited = ['00']
    }

    moveUp () {
        const isSpace = util.checkSpaceAvailable(this._board, 'up')
        if (!isSpace) {
            return false
        }

        let movement = this._board[0]
        this.up = movement = movement - 1

        const visited = util.getSpaceVisited(this._board)
        const isVisited = util.checkWasVisited(this._visited, visited)

        if (!isVisited) {
            this._visited.push(visited)
            const totalPokemons = this.getTotalPokemons
            this.setTotalPokemons = totalPokemons + 1
        }

        return true
    }

    moveDown() {
        let movement = this._board[0]
        this.down = movement = movement + 1

        const visited = util.getSpaceVisited(this._board)
        const isVisited = util.checkWasVisited(this._visited, visited)

        if (!isVisited) {
            this._visited.push(visited)
            const totalPokemons = this.getTotalPokemons
            this.setTotalPokemons = totalPokemons + 1
        }

        return true
    }

    moveLeft () {
        const isSpace = util.checkSpaceAvailable(this._board, 'left')

        if (!isSpace) {
            return false
        }

        let movement = this._board[1]
        this.left = movement = movement - 1

        const visited = util.getSpaceVisited(this._board)
        const isVisited = util.checkWasVisited(this._visited, visited)
        
        if (!isVisited) {
            this._visited.push(visited)
            const totalPokemons = this.getTotalPokemons
            this.setTotalPokemons = totalPokemons + 1
        }

        return true
    }

    moveRight () {
        let movement = this._board[1]
        this.right = movement = movement + 1

        const visited = util.getSpaceVisited(this._board)
        const isVisited = util.checkWasVisited(this._visited, visited)
        
        if (!isVisited) {
            this._visited.push(visited)
            const totalPokemons = this.getTotalPokemons
            this.setTotalPokemons = totalPokemons + 1
        }

        return true
    }

    set down (value) {
        this._board[0] = value
    }

    set up (value) {
        this._board[0] = value
    }

    set left (value) {
        this._board[1] = value
    }

    set right (value) {
        this._board[1] = value
    }

    set setTotalPokemons (value) {
        this._totalPokemons = value
    }

    get getBoard () {
        return this._board
    }

    get getVisited () {
        return this._visited
    }

    get getTotalPokemons () {
        return this._totalPokemons;
    }
}

export default new PokemonsController()