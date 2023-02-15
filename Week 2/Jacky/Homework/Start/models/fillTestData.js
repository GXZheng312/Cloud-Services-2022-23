let mongoose = require('mongoose');
Book = mongoose.model('Book');
Author = mongoose.model('Author');

let author_seed = [
    {
        firstname: "Jacky",
        lastname: "Zheng",
        birthdate: new Date(1996, 1, 20).toString(),
        ranking: 1,
        books: [1, 2]
    },
    {
        firstname: "David",
        lastname: "Meep",
        birthdate: new Date(1971, 4, 12).toString(),
        ranking: 2,
        country: "DE",
        books: [3]
    },
    {
        firstname: "TEST",
        lastname: "TEST2",
        ranking: 3,
        country: "US",
        books: [1, 2, 3]
    }
];

let book_seed = [
    {
        title: "HET BOEK VAN PAPIER",
        publishDate: new Date(1996, 1, 20).toString(),
        category: "COMEDY",
        chapters: [{ title: "WOWIE", numberOfPages: 99 }],
    },
    {
        title: "BOEK",
        publishDate: new Date(1990, 1, 1).toString(),
        category: "ACTION",
        chapters: [{ title: "LOL", numberOfPages: 10 }],
    },
    {
        title: "TEST",
        publishDate: new Date(2000, 1, 1).toString(),
        category: "TEST2",
        chapters: [{ title: "TEST3", numberOfPages: 10000 }],
    },
    {
        title: 'My Book',
        publishDate: new Date(2000, 1, 1).toString(),
        category: 'Fiction',
        chapters: [
            { title: 'Chapter 1', numberOfPages: 10 },
            { title: 'Chapter 2', numberOfPages: 15 }
        ]
    }
];

module.exports = function () {
    let Book = mongoose.model('Book');
    Book.find({}).then(books => {
        if (!books.length) {
            console.log('\tNo books found, filling testdata');
            Book.insertMany(book_seed)
                .then(() => console.log('\tFilling book testdata succesfull'))
                .catch(err => console.log('\tFilling book testdata failed', err));
        }
    });

    let Author = mongoose.model('Author');
    Author.find({}).then(authors => {
        if (!authors.length) {
            console.log('\tNo authors found, filling testdata');
            Author.insertMany(author_seed)
                .then(() => console.log('\tFilling author testdata succesfull'))
                .catch(err => console.log('\tFilling author testdata failed', err));
        }
    });
}