var express = require("express");
var router = express.Router();
const Course = require("../models/course.js");

// get all the courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific post
router.get("/:courseId", async (req, res) => {
  try {
    const wantedCourse = await Course.findById(req.params.courseId);
    res.json(wantedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

// add new course
router.post("/", async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a post
router.delete("/:courseId", async (req, res) => {
  try {
    const deletedCourse = await Course.remove({ _id: req.params.courseId });
    res.json(deletedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a post
router.patch("/:courseId", async (req, res) => {
  try {
    const updatedCourse = await Course.updateOne(
      { _id: req.params.courseId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
