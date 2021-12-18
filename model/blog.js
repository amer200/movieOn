const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: String,
    content: String,
    date: Date,
    writer: String,
    comments: Array
})
module.exports = mongoose.model('Blog', blogSchema);