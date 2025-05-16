 const mongoose = require("mongoose")
// const EnrolledCourse = require("./courseSchema")

 const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

    

  phone: { type: String },
  dob: { type: Date }, 
  gender: { type: String }, 
  occupation: { type: String },
  profileImage: {
    type: String,
    default: ''
  },
  // Enrolled logic start
     enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EnrolledCourse'
    }
  ]
    // Enrolled logic end


 })

 const User = mongoose.model("Registerdb", Schema)
 module.exports = User;