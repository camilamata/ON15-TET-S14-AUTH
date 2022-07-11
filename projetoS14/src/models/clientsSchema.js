const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cpf: {        
        type: String,
        required: true
    },
    weekDays: {
        type:[String],
        required: true
    },
    workoutPreference: {
        type: String,
        required: true
    }

       });

const Model = mongoose.model("Client", clientsSchema);

module.exports = Model;