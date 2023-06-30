const express = require('express');
const app = express();

let numbers = [];

app.post('/numbers', (req, res) => {
  const number = req.body.number;


  numbers.push(number);

  res.status(201).json({ message: 'Number added successfully' });
});

app.get('/numbers', (req, res) => {
  res.json(numbers);
});

app.get('/numbers/sum', (req, res) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  res.json({ sum });
});

app.get('/numbers/average', (req, res) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  res.json({ average });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});