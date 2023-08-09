const express = require('express');
const app = express();

app.get('/image', (req, res) => {
  // Serve the specific image for /image route
  res.sendFile(__dirname + '/webbg.png');
});

// Serve the main website for all other routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('ok');
});
