const mongoose = require('mongoose');


const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }
  next(); 
};

const validObjectBody = (req, res, next) => { 
  const character = req.body;
  if (
    !character ||
    !character.name ||
    !character.typeCar ||
    !character.photo
  ) {
    return res
      .status(400)
      .send({ message: 'Submit the all character fields!' });
  }
  next();
};



module.exports = {
  validId,
  validObjectBody,
};
