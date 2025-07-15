function camelize(str) {
  // ваш код...
  return str.split('-').map( (value, index) => (index > 0) ? (value[0].toUpperCase() + value.slice(1)) : value ).join('')
}

// console.log( camelize('background-color') )
// console.log( camelize('list-style-image') )
// console.log( camelize('-webkit-transition') )