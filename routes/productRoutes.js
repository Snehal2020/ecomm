const express = require("express");
const {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productCountController,
  productFiltersController,
  productListController,
  realtedProductController,
  productCategoryController,
  searchProductController
} = require("../controllers/productcontroller.js");
const { isAdmin, requireSignIn } =require("../middlewares/authMiddleware.js");
const formidable = require("express-formidable");

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  // isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);
module.exports= router;