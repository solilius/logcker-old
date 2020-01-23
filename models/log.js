const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
    create_date: { type: Date, default: Date.now },
    container: String,
    step: String,
    data: String
});

module.exports = mongoose.model('Log', logSchema);