const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // 👈 import the route
const Product = require('./models/Product'); // Adjust path if needed

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://basicsfootwear.s3-website-us-east-1.amazonaws.com' }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Add the product API route
app.use('/api/products', productRoutes); // 👈 mount it here

const PORT = 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
