const Popular = require("../models//Popular")

const Getpopular = async (req, res) => {
    const popimg = req.body.popimg;
    const popHeading = req.body.popHeading;
    const popParagraph = req.body.popParagraph;
    const data = {
      popimg,
      popHeading,
      popParagraph,
      
    };

    const popular = new Popular(data);
    await popular.save()
    res.send("popular", popular)
  };

   const Readpopular = async (req, res) => {
       try {
         // saare records nikal lo (latest sabse last me aata hai)
         const popular = await Popular.find();
     
         if (popular.length === 0) {
           return res.json({ message: "No data found" });
         }
     
         // latest wala record
         const latest = popular[popular.length - 1];
     
         // baaki sab delete kar do
         await Popular.deleteMany({ _id: { $ne: latest._id } });
     
         // sirf latest return karo
         res.json(latest);
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     };

     const Updatepopular = async (req, res) => {
         const popular = await Popular.findByIdAndUpdate(
           req.params.id,
           req.body,
           { new: true }
         );
         res.json(popular);
       };

       const Deletepopular = async (req, res) => {
           await Popular.findByIdAndDelete(req.params.id);
           res.json({ message: "Deleted" });
         };


  module.exports = {
    Getpopular,
    Readpopular,
    Updatepopular,
    Deletepopular,
  }