const express = require ("express")
const { GetAbout, ReadAbout, UpdateAbout, DeleteAbout } = require("../controllers/AboutController")
const router = express.Router()

router.post ("/aboutus", GetAbout);
router.get("/aboutus", ReadAbout);
router.put("/aboutus/:id", UpdateAbout);
router.delete("/aboutus/:id", DeleteAbout);

module.exports = router