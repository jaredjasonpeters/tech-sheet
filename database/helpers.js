module.exports = {
    findById: (args, arr, fn) => {
        var index = 0
        for(let item of arr) {
            index++
            if(item.id === args.id) return fn(item, index, arr)
        }
    }
}