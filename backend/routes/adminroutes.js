const express=require("express");
const router=express.Router();
const adminModel=require("../models/admin");
router.use(express.json());

     
    router.post("/mentor/add",async(req,res)=>{
      try {
          var item1=req.body;
    var data1=new adminModel(item1);
    await data1.save();
    res.status(200).send("data added successfully")
      } catch (error) { 
          res.status(404).send("unable to send  data")
     
      }
    });
    
    
      router.delete("/mentor/del/:id",async(req,res)=>{
    
    
    
    
        try {
            await adminModel.findByIdAndDelete(req.params.id);
            res.status(200).send("deleted successfully");
            
        } catch (error) {
            res.status(404).send("unable to delete data");
    
        }
       
    })
  



    
    
    
    
    
    router.post("/project/add",async(req,res)=>{
      try {
          var item1=req.body;
    var data1=new adminModel(item1);
    await data1.save();
    res.status(200).send("data added successfully")
      } catch (error) { 
          res.status(404).send("unable to send  data")
     
      }
    });
    
    
      router.delete("/project/del/:id",async(req,res)=>{
    
    
    
    
        try {
            await adminModel.findByIdAndDelete(req.params.id);
            res.status(200).send("deleted successfully");
            
        } catch (error) {
            res.status(404).send("unable to delete data");
    
        }
       
    })
    
    
    

module.exports=router;






    









