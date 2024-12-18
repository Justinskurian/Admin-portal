const express = require("express");
const mongoose=require("mongoose");
const router = express.Router();
const multer=require("multer");

const mentorModel = require("../models/mentor");
const projectModel = require("../models/project");
const referenceModel = require("../models/referenceMaterials");
const path = require("path");

router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() ;
    cb(null,uniqueSuffix + file.originalname);
  }
});
require("../models/referenceMaterials");
const ma1=mongoose.model("materials");

const upload = multer({ storage:storage });


router.post("/material/add",upload.single("file") ,async (req, res) => {

const title=req.body.title;
const fileName=req.file.filename;
  try {

 await   ma1.create({title:title,file:fileName});


  
    res.send({status:"ok"});
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});


router.post("/mentor/add", async (req, res) => {
  try {
    var item1 = req.body;
    var data1 = new mentorModel(item1);
    await data1.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});

router.post("/submission/add", async (req, res) => {
  try {
    var item1 = req.body;
    var data1 = new mentorModel(item1);
    await data1.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});

router.delete("/submission/del/:id", async (req, res) => {
  try {
    await mentorModel.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(404).send("unable to delete data");
  }
});

router.get("/projects", async (req, res) => {
  try {
    var data1 = await projectModel.find();
    res.status(200).send(data1);
  } catch (error) {
    res.status(404).send("unable to get data");
  }
});

router.get("/mentors", async (req, res) => {
  try {
    var data1 = await mentorModel.find();
    res.status(200).send(data1);
  } catch (error) {
    res.status(404).send("unable to get data");
  }
});




router.get("/material/get", async (req, res) => {
  try {
    ma1.find({}).then((data)=>{
      res.send({status:"deleted successfully",data:data});
    })

  } catch (error) {
    res.status(404).send("unable to get data");
  }
});





router.delete("/material/del/:id", async (req, res) => {
  try {
    await referenceModel.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(404).send("unable to delete data");
  }
});

router.get("/project/:mentorId", async (req, res) => {
  const { mentorId } = req.params;
  try {
    const mentor = await mentorModel
      .findById(mentorId)
      .populate({ path: "assignedProjects", model: projectModel });
    if (!mentor) {
      res.status(404).send({ message: "Mentor not found" });
    }
    res.status(200).send({ projects: mentor.assignedProjects });
  } catch (error) {
    console.log("error while fetching projects", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;