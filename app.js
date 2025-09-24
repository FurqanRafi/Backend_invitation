
const cors = require('cors');
const express = require ("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require ("dotenv")
// Add this to your main API file
dotenv.config()
const app = express();

const navRouter = require('./routes/NavbarRoutes');
const heroRouter = require('./routes/HeroRoutes');
const aboutRouter = require('./routes/AboutRoutes')
const popularRouter = require("./routes/PopularRoutes")
const cardsRouter = require("./routes/CardsRoutes")
const footerRouter = require ("./routes/FooterRoutes")

app.use(express.json({limit:"10mb"})) 
app.use(express.urlencoded({ extended: true, limit:"10mb" })) 
app.use(cookieParser())
app.use(cors());

app.use("/api", navRouter)
app.use("/api", heroRouter)
app.use("/api", aboutRouter)
app.use("/api", popularRouter)
app.use("/api", cardsRouter)
app.use("/api", footerRouter)

const connectDB = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=> console.log("✅ MongoDB Atlas Connected"))
.catch((err)=> console.log(err))
  
 module.exports = connectDB; 


module.exports = app;


