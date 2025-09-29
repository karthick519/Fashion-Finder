const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Mock data
const items = [
  "Red Dress",
  "Blue Jeans",
  "White Shirt",
  "Black Jacket",
  "Summer Dress",
  "Winter Coat",
  "Casual T-Shirt",
  "Formal Suit"
];

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, "public")));

// Search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = items.filter(item =>
    item.toLowerCase().includes(query)
  );
  res.json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
