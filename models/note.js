const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String},
    location: {type:String},
    description: {type:String},
    date: {type:Date}
  })
 

module.exports = mongoose.model('Note', noteSchema);