
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const User = require('./registerschema');
    const EnrolledCourse = require('./courseSchema');
    const Contact = require('./contactSchema');
    const app = express();
    const multer = require('multer');
    const fs = require('fs');

    // const { ObjectId } = require("mongoose").Types;
    const path = require('path');

    // Configuring Multer---
    const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}-${file.fieldname}.${ext}`);
  }
});
const upload = multer({ storage: storage });

//---
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//---
    
    const port = process.env.PORT || 5000;

    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/skill-bridge')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

    app.use(express.json());
    app.use(cors());

app.post("/register", (req, res) => {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
    });

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json({error: "Enter the email and password"})
    }
    User.findOne({email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                return res.status(200).json({success: "login success", userId: user._id})
            } else {
                return res.status(401).json({error: "Invalid Password"})
            }
        } else {
            res.json({error: "No Record Exist"})
        }
    })
});

//Api to get user details by default in user form

app.get("/api/users/:userId", async (req, res) => {
    try {
      const userRes = await User.findById({_id:req.params.userId})
      // console.log("ravaaaa",userRes)
        const user = await User.findById(req.params.userId)
        
        // console.log('user', user)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
            
        }
        // console.log("usreeeee",user)
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

// Api to add user details 
// PUT /api/users/:id - Update User Profile fields
app.put("/api/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const { phone, dob, gender, occupation ,profileImage} = req.body;
  // console.log("bodyydddd",req.body)

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { phone, dob , gender, occupation, profileImage},      //, phone, dob, gender, occupation 
      { new: true } // returns the updated document
      
    );
    // console.log(updatedUser)

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // console.log("Userrrrrr",updatedUser);
    res.json(updatedUser);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Upload image post api
app.post('/api/users/:userId/upload-image', upload.single('profileImage'), async (req, res) => {
  try {
    const userId = req.params.userId;
    const imagePath = `/uploads/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { image: imagePath }, 
      { new: true }
    );

    res.json({ message: 'Image uploaded successfully', imagePath,image:req.file.filename });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});
// Upload image post api



app.post('/enroll-course', async (req, res) => {
    try {
        const { userId, courseTitle } = req.body;
        const enrolledCourse = new EnrolledCourse({ userId, courseTitle });
        await enrolledCourse.save();
        res.json({ success: true, message: 'Enrollment successful' });
    } catch (error) {
        console.error('Enrollment error:', error);
        res.status(500).json({ success: false, message: 'Enrollment failed' });
    }
});

//to get enrolled-courses data to display in seperate page
// GET enrolled courses by user ID
app.get('/api/enrolled-courses/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const enrolledCourses = await EnrolledCourse.find({ userId });

    if (enrolledCourses.length === 0) {
      return res.status(404).json({ message: 'No enrolled courses found for this user.' });
    }

    res.json({ enrolledCourses });
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.get('/api/user/:userId/enrolledCourses', async (req, res) => {
    try {
        const userId = req.params.userId;
        const enrolledCourses = await EnrolledCourse.find({ userId });
        res.json(enrolledCourses);
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        res.status(500).json({ error: 'Failed to fetch enrolled courses' });
    }
});

// Contact form submission
app.post('/api/contact/submit', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ message: 'Error submitting contact form' });
    }
});

// Get all contact submissions (for admin use)
// app.get('/api/contact/submissions', async (req, res) => {
//     try {
//         const submissions = await Contact.find().sort({ createdAt: -1 });
//         res.json(submissions);
//     } catch (error) {
//         console.error('Error fetching contact submissions:', error);
//         res.status(500).json({ message: 'Error fetching contact submissions' });
//     }
// });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });