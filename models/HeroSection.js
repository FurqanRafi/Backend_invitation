const mongoose = require("mongoose")

const HeroSchema = new mongoose.Schema({
    upperHeading:String,
    heading:String,
    subHeading:String,
    btnText:String,
    img:String
})
module.exports = mongoose.model("HeroSection", HeroSchema)