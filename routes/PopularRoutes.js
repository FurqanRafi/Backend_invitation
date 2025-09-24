const express = require("express")
const { Getpopular, Readpopular, Updatepopular, Deletepopular } = require("../controllers/PopularController")
const router = express.Router()

router.post("/popular", Getpopular)
router.get("/popular", Readpopular)
router.put("/popular/:id", Updatepopular)
router.delete("/popular/:id", Deletepopular)

module.exports = router