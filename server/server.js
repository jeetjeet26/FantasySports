require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));


// Basic Route for Testing
app.get('/', (req, res) => {
  res.send('Hello World from Fantasy Sports Gacha Backend!');
});

// Starting the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');

// Other imports and server setup...

app.use('/auth', authRoutes);

const vcRoutes = require('./routes/vc');
// Other setup...

app.use('/api/vc', vcRoutes);
