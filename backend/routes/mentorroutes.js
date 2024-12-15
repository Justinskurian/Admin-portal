const express = require("express");
const router = express.Router();
const mentorModel = require("../models/mentor");
const projectModel = require("../models/project");
const referenceModel = require("../models/referenceMaterials");

router.use(express.json());

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





router.post("/material/add", async (req, res) => {
  try {
    var item1 = req.body;
    var data1 = new referenceModel(item1);
    await data1.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});

router.get("/material/get", async (req, res) => {
  try {
    var data1 = await referenceModel.find();
    res.status(200).send(data1);
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
