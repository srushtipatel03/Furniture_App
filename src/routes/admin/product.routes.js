const express = require('express');
const productRoutes = express.Router();
const { adminVerifyToken } = require('../../helpers/verifyToken');
const {
    addNewProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../../controller/admin/product.controller');
const { upload } = require('../../helpers/imageUpload');

productRoutes.post('/add-Product', upload.single('productImage'),addNewProduct);
productRoutes.get('/get-All-Products', adminVerifyToken, getAllProducts);
productRoutes.get('/get-Product', adminVerifyToken, getProduct);
productRoutes.put('/update-Product', adminVerifyToken, updateProduct);
productRoutes.delete('/delete-Product', adminVerifyToken, deleteProduct);

module.exports = productRoutes;