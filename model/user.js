const mongoose = require('mongoose');
const schema = mongoose.Schema;
const blog = require('./blog');
const userSchema = new schema({
    name: String,
    password: String,
    blogs: [blog],
    rolle: string
})
module.exports = mongoose.model('User', userSchema);