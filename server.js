const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json()); 

app.post('/save', (req, res) => {
  const { question, answer } = req.body;


  const csvData = `${question},${answer}\n`;
  const csvFilePath = path.join(__dirname, 'data', 'data.csv');
  fs.appendFileSync(csvFilePath, csvData);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
