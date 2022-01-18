const express = require('express');
const app = express();
const db = require('./db.json');
const port = process.env.PORT || 4000;

app.get('/tokenuri/:id', (req, res) => {
  const id = req.params.id;
  const ticket = db.find((t) => t.ticket_id === id);
  if (!ticket) return res.status(404).json({ message: 'Not found ticket' });

  return res.status(200).json(ticket);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
