import express from "express";
const router = express.Router()
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
// import express from "express";
// import asyncHandler from "express-async-handler";
// import User from "../models/userModel.js"
// const router = express.Router();


// router.get('/',
//     asyncHandler(async (req, res) => {
//     const user=await User.find({})
//     res.json(user);
// })
// )

// router.get('/:id',
//     asyncHandler(async (req, res) => {
//         const user = await User.findById(req.params.id)
//         if (user) {
//             res.json(user)
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