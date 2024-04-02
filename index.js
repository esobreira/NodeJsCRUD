const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);



app.get('/', (req, res) => {
  res.send("Hello from Node API")
})



// app.post('/api/products', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       res.status(400).json({message: "Product not found."})
//     }

//     const updated = await Product.findById(id);
//     res.status(200).json(updated);

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       res.status(400).json({message: "Product not found."})
//     }

//     res.status(200).json();

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

mongoose.connect('mongodb+srv://sobrees:q7MHH2Pnv78xcIIf@crudnodesobreescluster0.4spklf8.mongodb.net/')
  .then(() => {

    console.log('Connected!')

    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })

  })
  .catch(() => console.log('Connection Error'))
  ;

