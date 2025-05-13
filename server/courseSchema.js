const mongoose = require("mongoose");

const EnrolledCourseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseTitle: { type: String, required: true },
  enrollmentDate: { type: Date, default: Date.now,  }
});

const EnrolledCourse = mongoose.model("EnrolledCourse", EnrolledCourseSchema);
module.exports = EnrolledCourse;