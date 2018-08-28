module.exports = {

  IndexColor(index) {
    var colors = ['_', '#232122', '#383435', '#514f4f', '#968f91',]
    var index = index || 0

    return colors[index]
  },
  formatName(str) {
    return str.split('_').map(v => {
      var firstUpper = v[0].toUpperCase()
      var rest = [...v]
      var [x, ...chars] = rest
      var final = [firstUpper, ...chars]
      return final.join('')
    }).join(' ')
  }

}