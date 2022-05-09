const router = require('express').Router();
const ProductController = require('./Controller');
const multer = require("multer");
const upload = multer({ dest: "uploads" });
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.view);
router.post('/products',upload.single('image'), ProductController.store);
router.patch('/products/:id',upload.single('image'), ProductController.Update);
router.delete('/products/:id', ProductController.Delete);


module.exports = router;