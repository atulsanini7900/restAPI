const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Devloper=require("../models/devloper");

console.log("hello routes");

//get/read all the devlopers

router.get("/", (req,res)=>{
    res.send("API working Fine")
})

//post / create a devloper

// router.post("/create",async (req,res)=>{
//     try{
        
      
//        const NewDevloper=await Devloper.create(req.body);
//        res.json(NewDevloper);
//        res.status(201).json({message: "Success"})
//        newDeveloper.save()
//      .then(() => console.log("Developer saved successfully"))
//      .catch((error) => console.log("Error saving developer:", error));
       


//     }
//     catch(err){
       
//         res.status(400).json({message: "Error"})
//         console.log(err);
//     }
// })




//put / patch update a devloper



// delete one devloper



//get only one devloper



module.exports=router;