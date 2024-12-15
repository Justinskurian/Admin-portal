const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const adminModel = require("../models/admin");
const mentorModel = require("../models/mentor");

router.use(express.json());

router.post("/login", async (req, res) => {
  try {
    // Admin validation
    const admin = await adminModel.findOne({ email: req.body.email });
    if (admin) {
      if (
        admin.email == req.body.email &&
        admin.password == req.body.password
      ) {
        const payload = { email: admin.email, password: admin.password };
        const token = jwt.sign(payload, process.env.adminJwt, {
          expiresIn: "1h",
        });
        return res
          .status(200)
          .send({ message: "Login successful", token: token, role: "admin" });
      } else {
        return res.status(401).send({ message: "Invalid Login credentials" });
      }
    }

    //Mentor Validation
    const mentor = await mentorModel.findOne({ email: req.body.email });
    if (mentor) {
      if (
        mentor.email == req.body.email &&
        mentor.password == req.body.password
      ) {
        const payload = { email: mentor.email, password: mentor.password };
        const token = jwt.sign(payload, process.env.mentorJwt, {
          expiresIn: "1h",
        });
        return res
          .status(200)
          .send({ message: "Login Successful", token: token, role: "mentor", mentorId:mentor._id });
      } else {
        return res.status(401).send({ message: "Invalid Login credentials" });
      }
    }

    // If both are not found
    else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log("error while login", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;