var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema(
    {
        content: {type: String, required: true},
        username: {type: String, ref: 'User'},
        userID: {type: String, ref: 'User'}
    }
);

module.exports = mongoose.model('Message', schema);

//C:\Users\laris\Desktop\Visual Code\Projeto2\data\db
//Schema.Types.ObjectId