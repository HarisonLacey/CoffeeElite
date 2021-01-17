const Newsletter = require("../schema/newsletter");

//controller functions

// newsletter form
module.exports.newsletter = async (req, res) => {
  try {
    let newsletterUser = new Newsletter({
      name: req.body.name,
      email: req.body.email,
    });
    await newsletterUser.save();
    res.json({ message: "Subscribed!" });
  } catch (err) {
    res.json({ message: "Something went wrong :(" });
  }
};
