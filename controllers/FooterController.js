const Footer = require("../models/Footer")

// ✅ Create Footer
const createFooter = async (req, res) => {
  try {
    const del = await Footer.deleteMany();
    const footer = new Footer(req.body);
    await footer.save();
    res.status(201).json({ success: true, data: footer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ✅ Read All Footers
const getFooter = async (req, res) => {
  try {
    const footers = await Footer.find();
    res.status(200).json({ success: true, data: footers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Read Single Footer by ID
const getFooterById = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.id);
    if (!footer) return res.status(404).json({ success: false, message: "Footer not found" });
    res.status(200).json({ success: true, data: footer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Update Footer
const updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!footer) return res.status(404).json({ success: false, message: "Footer not found" });
    res.status(200).json({ success: true, data: footer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ✅ Delete Footer
const deleteFooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndDeleteMany(req.params.id);
    if (!footer) return res.status(404).json({ success: false, message: "Footer not found" });
    res.status(200).json({ success: true, message: "Footer deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports = {
    createFooter,
    getFooter,
    getFooterById,
    updateFooter,
    deleteFooter
}
