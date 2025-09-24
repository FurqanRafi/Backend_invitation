const HeroSection = require("../models/HeroSection");

const GetHero = async (req, res) => {
  const img = req.body.img;
  const upperHeading = req.body.upperHeading;
  const heading = req.body.heading;
  const subHeading = req.body.subHeading;
  const btnText = req.body.btnText;
  const data = {
    img,
    upperHeading,
    heading,
    subHeading,
    btnText,
  };
  const herosection = new HeroSection(data);
  await herosection.save();
  res.send("herosection", herosection);
};

const ReadHero = async (req, res) => {
  try {
    // saare records nikal lo (latest sabse last me aata hai)
    const herosection = await HeroSection.find();

    if (herosection.length === 0) {
      return res.json({ message: "No data found" });
    }

    // latest wala record
    const latest = herosection[herosection.length - 1];

    // baaki sab delete kar do
    await HeroSection.deleteMany({ _id: { $ne: latest._id } });

    // sirf latest return karo
    res.json(latest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const UpdateHero = async (req, res) => {
  const herosection = await HeroSection.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(herosection);
};

const DeleteHero = async (req, res) => {
  await HeroSection.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = {
  GetHero,
  ReadHero,
  UpdateHero,
  DeleteHero,
};
    

