const mongoose = require('mongoose');
const Schema = mongoose.Schema;
'use strict';

const ArticleShema=new Schema({

 title:{type: String},
 img:{ data: Buffer, contentType: String },
 body:[String], 
 published: {type: Date, default: Date.now},
 visits: { type: Number, default: 0 }
});


const Article=mongoose.model('article', ArticleShema);

module.exports= Article;