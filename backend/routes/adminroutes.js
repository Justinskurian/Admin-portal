const express=require("express");
const router=express.Router();
const jwt=require('jsonwebtoken')

const adminModel=require("../models/admin");
router.use(express.json());




router.post("/login",async(req,res)=>{
  try {
      const user=await adminModel.findOne({email:req.body.email});
      const payload={email:'admin123@gmail.com',password:'Admin123'}

      if((req.body.email=='admin123@gmail.com') && (req.body.password=='Admin123')){
          const token=jwt.sign(payload,'blogApp')
          console.log(token)
           res.status(200).send({message:'Login successful',token:token})
        
        }
       
          
        else if(user.password==req.body.password)
          {
            res.status(200).send({message:'Login successful'})
        
        
          }

          else if(!user){
              res.status(201).send({message:'User not found'})
                }


else{
  res.status(404).send("Invalid creddentials")

}
  } catch (error) { 
console.log(error)       
  }
});



router.post("/admin/add",async(req,res)=>{
  try {
      var item2=req.body;

var data2=new adminModel(item2);
await data2.save();
res.status(200).send("data added successfully")
  } catch (error) { 
      res.status(404).send("unable to send  data")
 console.log(error)
  }
});



  
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
  

    router.get("/submission/view",async(req,res)=>{
      try {
          var data1=await adminModel.find();
          res.status(200).send(data1);
          
      } catch (error) {
          res.status(404).send("unable to getdata");
      
      }
    }
  )

    
    
    
    
    
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






    









