import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
