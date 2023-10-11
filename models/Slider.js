const mongoose = require("mongoose");

const slider = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: true,
    },
});

const Slider = mongoose.model("slider", slider);
module.exports = Slider;
