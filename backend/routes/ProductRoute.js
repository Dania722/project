const express = require ("express");
const {getAllProducts,createProduct,updateProdut , deleteProduct , getSingleProduct} = require("../Controller/ProductController");
const {isAuthenticatedUser , authorizeRoles} = require ("../middleware/authentication")
const router = express.Router ();

router.route("/products").get(getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route("/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProdut)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
.get(getSingleProduct)


module.exports = router 