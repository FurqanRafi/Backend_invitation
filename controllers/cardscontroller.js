const Cards = require("../models/Cards")
const Getcards = async (req, res) => {
    const cardsimg1 = req.body.cardsimg1;
    const cardsimg2 = req.body.cardsimg2;
    const cardsimg3 = req.body.cardsimg3;
    const cardsimg4 = req.body.cardsimg4;
    const data = {
      cardsimg1,
      cardsimg2,
      cardsimg3,
      cardsimg4,
    };

    const cards = new Cards(data);
    await cards.save();
    res.send("cards", cards);
  };

  const ReadCards = async (req, res) => {
    try {
      // saare records nikal lo (latest sabse last me aata hai)
      const cards = await Cards.find();
  
      if (cards.length === 0) {
        return res.json({ message: "No data found" });
      }
  
      // latest wala record
      const latest = cards[cards.length - 1];
  
      // baaki sab delete kar do
      await Cards.deleteMany({ _id: { $ne: latest._id } });
  
      // sirf latest return karo
      res.json(latest);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const UpdateCards = async (req, res) => {
    const cards = await Cards.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(cards);
  };

  const DeleteCards= async (req, res) => {
    await Cards.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  };


  module.exports = {
    Getcards,
    ReadCards,
    UpdateCards,
    DeleteCards 
  }
  