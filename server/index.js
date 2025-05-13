    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const User = require('./registerschema');
    const EnrolledCourse = require('./courseSchema');
    const Contact = require('./contactSchema');


    const app = express();
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
app.get('/api/contact/submissions', async (req, res) => {
    try {
        const submissions = await Contact.find().sort({ createdAt: -1 });
        res.json(submissions);
    } catch (error) {
        console.error('Error fetching contact submissions:', error);
        res.status(500).json({ message: 'Error fetching contact submissions' });
    }
});

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });