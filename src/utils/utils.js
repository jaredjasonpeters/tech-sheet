
const formatName = (str) => {
  return str.split('_').map(v => {
    var firstUpper = v[0].toUpperCase()
    var rest = [...v]
    var [x, ...chars] = rest
    var final = [firstUpper, ...chars]
    return final.join('')
  }).join(' ')
}

const IndexColor = (index) => {
  var colors = ['_', '#232122', '#383435', '#514f4f', '#968f91',]
  var index = index || 0

  return colors[index]
}

const formatInput = (str, type) => {
  if(type === 'name') {
   return [...str].map(v=>v.toUpperCase())
  }
  if(type === 'rating') {
    return str
  }
}



module.exports = {
  formatName,
  IndexColor,
  formatInput

  // IndexColor(index) {
  //   var colors = ['_', '#232122', '#383435', '#514f4f', '#968f91',]
  //   var index = index || 0

  //   return colors[index]
  // },
  // formatName(str) {
  //   return str.split('_').map(v => {
  //     var firstUpper = v[0].toUpperCase()
  //     var rest = [...v]
  //     var [x, ...chars] = rest
  //     var final = [firstUpper, ...chars]
  //     return final.join('')
  //   }).join(' ')
  // },
  // formatInput(str, type) {
  //   if(type === 'name') {
  //     return formatName(str)
  //   }
  //   if(type === 'rating') {
  //     return str
  //   }
  // }

}