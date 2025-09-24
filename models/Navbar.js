
const mongoose = require("mongoose")


const navbarSchema = new mongoose.Schema({
    img:String,   
    navlinks:[{
        name: String, link: String
    }],
    text: String,
    
})

module.exports = (mongoose.model("Navbar", navbarSchema))