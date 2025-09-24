const mongoose = require("mongoose")

const PopularSchema = new mongoose.Schema({
    popimg:String,
    popHeading: String,
    popParagraph:String    
})

module.exports = mongoose.model("Popular", PopularSchema)