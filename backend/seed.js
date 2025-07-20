require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust path as needed

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("Mongo Error", err));

// Load and convert JSON
const rawData = fs.readFileSync('shoedata.json', 'utf-8'); // path to your file
const objectData = JSON.parse(rawData);

// Convert object to array
const productArray = Object.keys(objectData).map(key => objectData[key]);

// Insert into DB
const importData = async () => {
  try {
    await Product.insertMany(productArray);
    console.log("✅ Products inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1);
  }
};

importData();
