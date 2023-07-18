const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=process.env.PORT || 8005;


//import the routes

const devRoute=require("./routes/dev");



//database connection
mongoose.connect("mongodb://127.0.0.1:27017/myapp",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("database Successfully Connected");
}).catch((err)=>{
    console.log(err);
})


app.use("/api/client",devRoute);

app.listen(port,()=>{
    console.log('connection setup at', port);
})

// app.get("/", (req,res)=>{
//     res.send("hello world REST API");



// });

// app.post("/student", (req,res)=>{
//     res.send("hello");
// })

