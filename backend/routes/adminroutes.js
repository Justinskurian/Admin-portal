const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const adminModel = require("../models/admin");
const mentorModel = require("../models/mentor");
const projectModel = require("../models/project");

router.use(express.json());

router.post("/admin/add", async (req, res) => {
  try {
    var item2 = req.body;

    var data2 = new adminModel(item2);
    await data2.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
    console.log(error);
  }
});

router.post("/mentor/add", async (req, res) => {
  try {
    var item3 = req.body;
    var data3 = new mentorModel(item3);
    await data3.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});

router.delete("/mentor/del/:id", async (req, res) => {
  try {
    await mentorModel.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(404).send("unable to delete data");
  }
});

router.post("/project/add", async (req, res) => {
  try {
    var item1 = req.body;
    var data1 = new projectModel(item1);
    await data1.save();
    res.status(200).send("data added successfully");
  } catch (error) {
    res.status(404).send("unable to send  data");
  }
});

router.delete("/project/del/:id", async (req, res) => {
  try {
    await projectModel.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(404).send("unable to delete data");
  }
});

router.post("/assignProject", async (req, res) => {
  const { mentorId, projectId } = req.body;

  // Checking for mentor and project
  try {
    const mentor = await mentorModel.findById(mentorId);
    if (!mentor) {
      return res.status(404).send({ message: "Mentor Not Found" });
    }
    const project = await projectModel.findById(projectId);
    if (!project) {
      return res.status(404).send({ message: "Project Not Found" });
    }

    // Checking if the project is already assigned
    if (project.assignedTo) {
      return res
        .status(400)
        .send({ message: "Project is already assigned to another mentor" });
    }

    // Assigning project and pushing to mentor database
    project.assignedTo = mentorId;
    await project.save();
    mentor.assignedProjects.push(projectId);
    await mentor.save();
    res.status(200).send({ message: "Project assigned successfully" });
    
  } catch (error) {
    console.log(`Error during assignment`, error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
