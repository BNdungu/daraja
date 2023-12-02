const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // You can change the port as needed

// Endpoint to handle Safaricom's callback URL
app.post('/', (req, res) => {
  console.log('Received callback from Safaricom:', req.body); // Log the received data
  res.status(200).send('Callback received successfully.'); // Send a response to Safaricom
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
