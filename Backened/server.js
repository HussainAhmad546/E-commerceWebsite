import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';



dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hurray Api is running');
});
app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders',orderRoutes)

// app.get('/', (req, res) => {
//     res.send('Hurray Api is running');
// });

// app.get('/api/products', (req, res) => {
//     res.send(products);
// });

// app.get('/api/products/:id', (req, res) => {
//     const product=products.find((p)=>p._id===req.params.id);
//     res.send(product);
// });
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT||5000;


app.listen(
    PORT,
    console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);





// "scripts": {
//     "start": "node backend/server",
//     "server": "nodemon backend/server",
//     "client": "npm start --prefix ecommerce",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
//   },



// import express from 'express';
// import dotenv from 'dotenv';
// import colors from 'colors';
// import connectDB from './config/db.js';
// import products from './data/products.js';

// dotenv.config();

// const app = express();

// connectDB();

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(
//   PORT,
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
// );
