const express = require("express");
const router = express.Router();
const db = require('../Controller/Database')
const Students = require('../Models/Student')

const app = express();

router.get("/", (req, res) => {
  res.render("Form");
});

router.post("/students", async (req, res) => {
  const student = new Students(req.body);
  await student.save();
  res.redirect("/students");
});

router.get("/students", async (req, res) => {
  const students = await Students.find({});

//   students.forEach((studentsData) => {});
  res.render("students", { students });
});

module.exports = router;
 