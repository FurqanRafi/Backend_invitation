const mongoose = require("mongoose")

const AboutUsSchema = new mongoose.Schema({
    aboutimg : String,
    aboutHeading:String,
    aboutParagraph: String,
    img1:String,
    img2:String,
    img3:String
})

module.exports = mongoose.model("AboutUs", AboutUsSchema)