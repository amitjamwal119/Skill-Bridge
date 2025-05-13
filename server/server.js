const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

// ... existing code ...

app.use('/api/contact', contactRoutes);

// ... existing code ... 