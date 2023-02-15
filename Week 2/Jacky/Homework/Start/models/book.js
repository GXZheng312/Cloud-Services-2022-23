var mongoose = require('mongoose');

console.log('Initializing books schema');

var bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    publishDate: { type: Date, required: true, max: Date.now() },
    category: { type: String, required: true },
    chapters: [{ title: String, numberOfPages: Number }],
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

bookSchema.virtual('totalNumberOfPages').get(function () {
    var total = 0;
    for (var i = 0; i < this.chapters.length; i++) {
        total += this.chapters[i].numberOfPages;
    }
    return total;
});

mongoose.model('Book', bookSchema);




