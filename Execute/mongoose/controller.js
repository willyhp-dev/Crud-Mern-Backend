const { ObjectId } = require("mongodb");
const Product = require("./model");
const fs = require("fs");
const path = require("path");
const index = (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const view = async (req, res) => {
  const id = req.params.id.trim();
  try {
     await Product.find({ "_id": ObjectId(id) })
     .then((result) => res.send(result))
     .catch((error) => res.send(error));
  } catch (error) {
    res.send(error);
  }
};
const search = async (req, res) => {
  const search = req.params.search.trim();
  try {
    const productid = await Product.find({ "name":{$regex:search} });
    res.send(productid);
  } catch (error) {
    res.send(error);
  }
};
const store = (req, res) => {
  const { name, stock, price, status } = req.body;
  // const image = req.file;
  // if (image) {
  //   const target = path.join(__dirname, "../../uploads", image.originalname);
  //   fs.renameSync(image.path, target);
  //   Product.create({
  //     name,
  //     price,
  //     stock,
  //     status,
  //     image_url: `http://localhost:3000/public/${image.originalname}`,
  //   })
  //     .then((result) => res.send(result))
  //     .catch((error) => res.send(error));
  // }
  Product.create({
    name,
    price,
    stock,
    status,
  })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const update = (req, res) => {
  const id = req.params;
  const update = req.body;

  Product.updateOne({ _id: ObjectId(id) }, { $set: update })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const destroy = async (req, res) => {
  const id = req.params;
  Product.deleteOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
module.exports = {
  index,
  view,
  update,
  destroy,
  store,
  search,
};
