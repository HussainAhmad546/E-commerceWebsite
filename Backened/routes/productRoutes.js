import express from "express";
const router = express.Router()
import {
    getProducts,
    getProductById,
    addProduct,
} from '../controllers/productController.js'
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/add').post(addProduct)
export default router

// import express from "express";
// import asyncHandler from "express-async-handler";
// import Product from '../models/productModel.js'
// const router = express.Router();


// router.get('/',
//     asyncHandler(async (req, res) => {
//     const products=await Product.find({})
//     res.json(products);
// })
// )

// router.get('/:id',
//     asyncHandler(async (req, res) => {
//         const product = await Product.findById(req.params.id)
//         if (product) {
//             res.json(product)
//         } else {
//             res.status(404)
//             throw new Error('Product not found')
//         }
// })
// )
// export default router

// // router.get('/api/products/:id', (req, res) => {
// //     const product=products.find((p)=>p._id===req.params.id);
// //     res.send(product);
// // });
