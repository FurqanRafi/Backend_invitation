const express = require ("express")
const { getFooter, createFooter, getFooterById, updateFooter, deleteFooter } = require("../controllers/FooterController")
const router = express.Router()


router.post("/footer", createFooter)
router.get("/footer", getFooter )
router.get("/footer/:id", getFooterById)
router.put("/footer/:id", updateFooter)
router.delete("/footer/:id", deleteFooter)


module.exports = router