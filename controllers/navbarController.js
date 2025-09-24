const Navbar = require("../models/Navbar");

const GetNavbar = async (req, res) => {
    const img = req.body.img;
    const navlinks = req.body.navlinks;
    const text = req.body.text;
    const data ={
        img,
        navlinks,
        text
    }
    const navbar = new Navbar(data);
    await navbar.save();
    res.send("navbar" , navbar);
  }

  const ReadNavbar = async (req, res) => {
    try {
      // saare records nikal lo (latest sabse last me aata hai)
      const navbars = await Navbar.find();
  
      if (navbars.length === 0) {
        return res.json({ message: "No data found" });
      }
  
      // latest wala record
      const latest = navbars[navbars.length - 1];
  
      // baaki sab delete kar do
      await Navbar.deleteMany({ _id: { $ne: latest._id } });
  
      // sirf latest return karo
      res.json(latest);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  const ReadOne = async (req, res) => {
    const navbar = await Navbar.findById(req.params.id);
    res.json(navbar);
  }
  const UpdateNavbar = async (req, res) => {
    const navbar = await Navbar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(navbar);
  }

  const DeleteNavbar = async (req, res) => {
    await Navbar.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  }


  module.exports = {
    GetNavbar,
    ReadNavbar,
    ReadOne,
    UpdateNavbar,
    DeleteNavbar
  }