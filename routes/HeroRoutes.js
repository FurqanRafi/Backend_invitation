const express = require("express");
const { GetHero, ReadHero, UpdateHero, DeleteHero } = require("../controllers/HeroController");
const router = express.Router()
router.post("/herosection", GetHero);
  
  // READ all
  router.get("/herosection", ReadHero);
  
  // UPDATE
  router.put("/herosection/:id", UpdateHero);
  
  // DELETE
  router.delete("/herosection/:id", DeleteHero);


  module.exports = router
