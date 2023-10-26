import express from "express"
import products from "./Data/Products.js";

console.log(products)

const app = express();

//Load Productos From Data
app.get("/api/products", (req,res)=>{
    res.json(products)
})

app.get("/", (req, res)=>{
    res.send("Api is running")
})

app.listen(5000, console.log("server running"));