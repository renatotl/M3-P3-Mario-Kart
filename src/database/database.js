const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb CONECTED!'))
    .catch((error) =>
      console.log(`Error to conect to mongoDB, error: ${error}`),
    );
}

module.exports = connectToDataBase;


