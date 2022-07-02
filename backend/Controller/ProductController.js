const Product = require("../models/productModels");
const ErrorHandler = require("../utilis/errorHandling");
const catchAsyncError = require("../middleware/catchAsyncError");
const Features = require ("../utilis/features")

//create product
exports.createProduct = catchAsyncError(async(req , res , next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        SUCCESS:true , 
        product
    })
});



//get products 
exports.getAllProducts = catchAsyncError(async(req,res) => {

    //featues 
    const resultPerPage= 8 ;
    const productCount = await Product.countDocuments()
const feature = new Features (Product.find() , req.query)
.search()
.filter()
.pagination(resultPerPage);

    const products = await feature.query;
    res.status(200).json({
        success:true , 
        products,
        resultPerPage
    })
});



//update product

exports.updateProdut= catchAsyncError(async(req,res,next) =>
{
    let product = await Product.findById(req.params.id);
    if(!product){
        // return res.status(500).json({
        //     success:false,
        //     message:"Product is not found with this id",
        // })
        return next(new ErrorHandler("Product is not found with this id " , 404 ))
    }
    await product.remove();
       res.status(200).json({
        success:true,
       })
    });


 // deletee  
 exports.deleteProduct = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        // return res.status(500).json({
        //     success:false,
        //     message:"Product is not found with this id",
        // })
        return next(new ErrorHandler("Product is not found with this id " , 404 ))
    }
    res.status(200).json({
        success:true,
        message:"Product has been deleted sucessfully"
    })
 } );  

 //single product details 

exports.getSingleProduct =catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
       return next(new ErrorHandler("Product is not found with this id " , 404 ))
    } 
    res.status(200).json({
        success:true,
        product,
        productCount 
    }) 
});
