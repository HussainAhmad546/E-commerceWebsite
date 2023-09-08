import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
// @desc Fetch all products
// @route GET /api/products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});
// @desc Fetch single product
// @ route GET/api//products/:id
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found')
    }
});

// create a new product
// route /api/products/add
// 

// related mongodb

const addProduct = asyncHandler(async (req, res) => {
    const { name, image, description, brand, category, price, countInStock, rating, numReviews } = req.body
    const productExists = await Product.findOne({ name })
    if (productExists) {
        res.status(400)
        throw new Error('product already exists')
    }

    // const user = req.user;

    const product = await Product.create({
        user: req.body.user,
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
        rating,
        numReviews,
        
    })
    // frontend response
    
    if (product) {
        res.status(201).json({
            
            name: product.name,
            image: product.image,
            description: product.description,
            brand: product.brand,
            category: product.category,
            price: product.price,
            countInStock: product.countInStock,
            rating: product.rating,
            numReviews: product.numReviews,
           user: product.user,
        })
    } else {
        res.status(400)
        throw new Error('Invalid product data')
    }
})

export {getProducts, getProductById, addProduct}
