export const checkSpaceAvailable = (array, movement) => {
    if (movement === 'up') {
        if (array[0] === 0) {
            // console.log(`There are no house to north! Your position is: ${array[0]},${array[1]}`)
            return false
        }
    }

    if (movement === 'left') {
        if (array[1] === 0) {
            // console.log(`There are no house to west! Your position is: ${array[0]},${array[1]}`)
            return false
        }
    }

    return true
}

export const getSpaceVisited = board => board[0].toString() + board[1].toString()

export const checkWasVisited = (visited, current) => visited.includes(current) ? true : false 