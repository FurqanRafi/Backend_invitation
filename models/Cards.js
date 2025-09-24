const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    cardsimg1:String,
    cardsimg2:String,
    cardsimg3:String,
    cardsimg4:String,
})


module.exports = mongoose.model("Cards", CardSchema)
