const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); // ✅ You must define app here

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.log('🔍 Loading authRoutes...');
const authRoutes = require('./routes/authRoutes');
console.log('✅ Loaded authRoutes');

console.log('🔍 Loading postRoutes...');
const postRoutes = require('./routes/postRoutes');
console.log('✅ Loaded postRoutes');

console.log('🔍 Loading categoryRoutes...');
const categoryRoutes = require('./routes/categoryRoutes');
console.log('✅ Loaded categoryRoutes');

console.log('🧪 typeof authRoutes:', typeof authRoutes);
console.log('🧪 typeof postRoutes:', typeof postRoutes);
console.log('🧪 typeof categoryRoutes:', typeof categoryRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// DB & Server
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern_blog')
  .then(() => {
    console.log('✅ MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
