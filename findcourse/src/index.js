const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for course search
app.get('/api/courses', (req, res) => {
  // Placeholder for course search logic
  res.json([{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }]);
});

// Sample route for scholarship finder
app.get('/api/scholarships', (req, res) => {
  // Placeholder for scholarship finder logic
  res.json([{ id: 1, name: 'Scholarship 1' }, { id: 2, name: 'Scholarship 2' }]);
});

// Sample route for virtual tours
app.get('/api/tours', (req, res) => {
  // Placeholder for virtual tours logic
  res.json([{ id: 1, name: 'Tour 1' }, { id: 2, name: 'Tour 2' }]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
