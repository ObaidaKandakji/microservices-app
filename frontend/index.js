const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce platform');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
