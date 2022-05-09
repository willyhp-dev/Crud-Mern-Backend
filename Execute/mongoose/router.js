const router = require("express").Router();
const multer = require("multer");
const upload = multer({ desk: "uploads" });
const ProductController = require("./controller");

router.get("/", ProductController.index);
router.get("/productz/", ProductController.index);
router.get("/productz/:search", ProductController.search);
router.post("/productz", upload.single("image"), ProductController.store);
router.get("/detail/:id", ProductController.view);
router.patch("/update/:id", upload.single("image"), ProductController.update);
router.delete("/delete/:id", ProductController.destroy);

module.exports = router;
