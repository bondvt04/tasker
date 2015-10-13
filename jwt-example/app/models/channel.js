var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Channel', new Schema({
    link: { type: String, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true }
}));