const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// 1. Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname); // e.g. 1715856000031.jpg
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// 2. Upload route
router.post('/upload', upload.single('profileImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

module.exports = router;



// Update user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user', error: err });
  }
});
