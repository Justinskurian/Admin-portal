const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./database/dataConnect");
const cors = require("cors");
const adminRoutes = require("./routes/adminroutes");
const mentorRoutes = require("./routes/mentorroutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/", loginRoutes);
app.use("/admin", adminRoutes);
app.use("/mentor", mentorRoutes);


const multer=require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() ;
    cb(null,uniqueSuffix+file.originalname)
  }
});

const upload = multer({ storage:storage });
app.post('/mentor/material/add',upload.single("file"), async(req,res)=>{
  console.log(req.file);
})

app.get("/",async(req,res)=>{
  res.send("success");
})




app.listen(3000, () => {
  console.log(`server is running on ${process.env.port}`);
});
