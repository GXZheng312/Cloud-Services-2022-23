var mongoose = require('mongoose');

console.log('Initializing author schema');

var authorSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    birthdate: {type: Date, default: Date.now()},
    country: {type: String, default: "NL"},
    ranking: {type: Number, min: 1},
    books: [Number],
});

/*
    TODO: 7 - Projecting:
    - fullname is een property die opgehaald wordt
    - age is een property die opgehaald wordt
    - numberOfBooks is een property die opgehaald wordt
*/

mongoose.model('Author', authorSchema);