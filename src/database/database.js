const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose
    .connect('mongodb+srv://root:admin@api-mario-m3p3.vd2tcln.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb CONECTED!'))
    .catch((error) =>
      console.log(`Error to conect to mongoDB, error: ${error}`),
    );
}

module.exports = connectToDataBase;


