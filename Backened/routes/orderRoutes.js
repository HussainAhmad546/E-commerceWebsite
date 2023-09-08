import express from 'express'
const router = express.Router();
import { addOrderItems } from '../controllers/orderControllers.js'
import { protect } from '../middleware/authMiddleware.js';
router.route('/').post(protect, addOrderItems)
export default router


// import express from "express";
// import asyncHandler from "express-async-handler";
// import Order from "../models/orderModel.js"
// const router = express.Router();


// router.get('/',
//     asyncHandler(async (req, res) => {
//     const order=await Order.find({})
//     res.json(order);
// })
// )

// router.get('/:id',
//     asyncHandler(async (req, res) => {
//         const order = await Order.findById(req.params.id)
//         if (order) {
//             res.json(order)
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