let mongoose = require('mongoose');
Book = mongoose.model('Book');
Author = mongoose.model('Author');

let author_seed = [
    {
        firstName : 'Sven',
        lastName : 'de Bresser',
        birthDate : 18-06-2001,
        country : 'NL',
        ranking : 1,
        books : ['1']
    }
];

let book_seed = [
    {
        _id: '1',
        title: 'Book 1',
        publishDate: new Date(2000, 01, 01),
        category: 'Fantasy',
        chapters: [{ title: 'First', numberOfPages: 20 }, { title: 'Second', numberOfPages: 10 }, { title: 'Third', numberOfPages: 15 }]
    },
];

module.exports = function(){
    let Book = mongoose.model('Book');
    Book.find({}).then(books => {
        if(!books.length){
            console.log('\tNo books found, filling testdata');
            Book.insertMany(book_seed)
                .then(() => console.log('\tFilling book testdata succesfull'))
                .catch(err => console.log('\tFilling book testdata failed', err));
        }
    });

    let Author = mongoose.model('Author');
    Author.find({}).then(authors => {
        if(!authors.length){
            console.log('\tNo authors found, filling testdata');
            Author.insertMany(author_seed)
                .then(() => console.log('\tFilling author testdata succesfull'))
                .catch(err => console.log('\tFilling author testdata failed', err));
        }
    });
}