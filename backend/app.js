const express = require("express");
require("dotenv").config();
require("./database/dataConnect");
const cors = require("cors");
const adminRoutes = require("./routes/adminroutes");
const mentorRoutes = require("./routes/mentorroutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
app.use(express.json());

app.use(cors());
app.use("/files", express.static("files"));
app.use("/files", express.static("files"));
app.use("/", loginRoutes);
app.use("/admin", adminRoutes);
app.use("/mentor", mentorRoutes);

app.get("/", async (req, res) => {
  res.send("success");
});

app.listen(3000, () => {
  console.log(`server is running on ${process.env.port}`);
});
