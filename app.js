import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', session: 'NB6007CEM S2' });
});

// Example JSON endpoint
app.get('/json', (req, res) => {
  res.json({ message: 'Hello, world!' });
});