
const express = require('express')
const app =express()


const mongoose = require('mongoose')
//connecting to DB
 mongoose.connect("mongodb+srv://Team15:team15@cluster0.yirhq.mongodb.net/laundry?retryWrites=true&w=majority",{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


//external middleware
console.log("mongosee connected");
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())


//user routes
app.use( require("./routes/auth"))

//orders routes
app.use("/order" ,require("./routes/orders"))


//const PORT= 5000
const PORT = process.env.PORT || 5000

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port 5000");
})

