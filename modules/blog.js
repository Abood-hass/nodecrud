const mongoose = require('mongoose');

const Schema = mongoose.Schema;

require('dotenv').config({ path: './config.env' })

mongoose.connect("mongodb+srv://abood:abood@cluster0.bqusa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"|| process.env.dbConnection);

const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String
  });


  module.exports = mongoose.model('Blog', blogSchema);