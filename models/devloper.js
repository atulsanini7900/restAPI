const mongoose = require("mongoose");



const devloperSchema = new mongoose.Schema({
    name: {
        type: String

    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true,

    },
    technology: {
        type: String,
        required: true
    },
    employed: {
        type: Boolean,
        default: false
    }

});

const Devloper = mongoose.model("Devloper", devloperSchema);

module.exports=Devloper;