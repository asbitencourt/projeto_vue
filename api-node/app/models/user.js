
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UUID: Number,
    nome: String,
    email: String

});

module.exports = mongoose.model('User',UserSchema);