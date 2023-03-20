const user        = require('./user.js')
const otherUser   = require('./user.js')

user.setName('Piet');

console.log(user.getName())
console.log(otherUser.getName())
