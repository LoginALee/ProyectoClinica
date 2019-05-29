const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
},  {timeStamps: true}

)

module.exports = userSchema;