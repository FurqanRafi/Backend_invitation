const express = require("express")
const { Getcards, ReadCards, UpdateCards, DeleteCards } = require("../controllers/cardscontroller")
const router = express.Router()


router.post("/card", Getcards)
router.get("/card", ReadCards)
router.put("/card/:id", UpdateCards)
router.delete("/card/:id", DeleteCards)

module.exports = router