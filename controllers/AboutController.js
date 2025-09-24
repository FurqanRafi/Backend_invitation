const AboutUs = require ("../models/AboutUs")

const GetAbout = async (req, res) => {
    const aboutimg = req.body.aboutimg;
    const aboutHeading = req.body.aboutHeading;
    const aboutParagraph = req.body.aboutParagraph;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const img3 = req.body.img3;
    const data = {
      aboutimg,
      aboutHeading,
      aboutParagraph,
      img1,
      img2,
      img3,
    };

    const aboutus = new AboutUs(data);
    await aboutus.save();
    res.send("aboutus", aboutus);
  };

  const ReadAbout = async (req, res) => {
    try {
      // saare records nikal lo (latest sabse last me aata hai)
      const aboutus = await AboutUs.find();
  
      if (aboutus.length === 0) {
        return res.json({ message: "No data found" });
      }
  
      // latest wala record
      const latest = aboutus[aboutus.length - 1];
  
      // baaki sab delete kar do
      await AboutUs.deleteMany({ _id: { $ne: latest._id } });
  
      // sirf latest return karo
      res.json(latest);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const UpdateAbout = async (req, res) => {
    const aboutus = await AboutUs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(aboutus);
  };

  const DeleteAbout = async (req, res) => {
    await AboutUs.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  };
  


  module.exports ={
    GetAbout,
    ReadAbout,
    UpdateAbout,
    DeleteAbout,
  }