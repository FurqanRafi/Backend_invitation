const express = require("express");

const app =express()
const router = express.Router()

const { GetNavbar, ReadNavbar, ReadOne, UpdateNavbar, DeleteNavbar } = require("../controllers/navbarController");

router.post("/navbar", GetNavbar);
  
  // READ all
  router.get("/navbar", ReadNavbar);
  
  // READ one
  router.get("/navbar/:id", ReadOne);
  
  // UPDATE
  router.put("/navbar/:id", UpdateNavbar);
  
  // DELETE
  router.delete("/navbar/:id", DeleteNavbar);


  module.exports = router