const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");
const fs = require("fs");
const path = require("path");
const index = (req, res) => {
  db.collection("Product")
    .find()
    .toArray()
    .then((result) => res.send(result).catch((error) => res.send(error)));
};
const view = (req, res) => {
  const id = req.params;
  db.collection("Product")
    .findOne({ _id: ObjectId(id) })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};
const store = (req, res) => {
  const { name, stock, price, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("Product")
      .insertOne({
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:3000/public/${image.originalname}`,
      })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  }
};
const Update = (req, res) => {
  const update = req.body;
  const image = req.file;
  const id = req.params;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("Product")
      .updateOne(
        { _id: ObjectId(id) },
        {
          $set: update,
        }
      )
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  } else {
    db.collection("Product")
      .updateOne(
        { _id: ObjectId(id) },
        {
          $set: update,
        }
      )
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  }
};
const Delete = (req, res) => {
  const id = req.params.id;
  db.collection("Product")
    .deleteOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

module.exports = {
  index,
  view,
  store,
  Update,
  Delete,
};
