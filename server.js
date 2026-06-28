// Express-based Hello World (ES modules)
import express from 'express';

export const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text').send('Hello, world!');
});

// Example JSON endpoint
app.get('/json', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

