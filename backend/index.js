// backend/index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
