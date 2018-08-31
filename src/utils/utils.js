
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
  if (type === 'name') {
    return [...str].map(v => v.toUpperCase())
  }
  if (type === 'rating') {
    return str
  }
}

const Colors = {
  DLF_Pickseed_Pro_Turf: '#80bc00',
  DLF_Pickseed_Forage: '#ce1141',
  Seed_Research_of_Oregon: '#C60C30',
  DLF_BLK: 'white',
}



module.exports = {
  formatName,
  IndexColor,
  formatInput,
  Colors

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