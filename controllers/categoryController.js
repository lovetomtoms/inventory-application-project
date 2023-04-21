const Category = require("../models/category");

exports.test_makeCategory = async function (req, res) {
  const category = new Category({
    name: "toys",
    description: "toys for fun",
  });
  await category.save();
  console.log(category);
  res.send(category);
};
