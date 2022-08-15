const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/characters.route');
const connectToDataBase = require('./src/database/database');

connectToDataBase();

app.use(express.json());
app.use('/characters', route);
app.use(cors());

app.listen(port, () => {
  console.log(`Serve work on http://localhost:${port}`);
});
