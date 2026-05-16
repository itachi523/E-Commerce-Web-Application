
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err))

const Product = require('./models/Product')

app.get('/api/products', async(req,res)=>{
  const products = await Product.find()
  res.json(products)
})

app.post('/api/products', async(req,res)=>{
  const product = await Product.create(req.body)
  res.json(product)
})

app.listen(process.env.PORT, ()=>{
  console.log('Server Running')
})
