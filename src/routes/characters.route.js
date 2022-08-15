const express = require('express');
const route = express.Router();
const controllerCharacters = require('../controllers/characters.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));



route.get('/All-Characters', controllerCharacters.findAllCharactersController);
route.get(
  '/Characters-By-Id/:id',
  validId,
  controllerCharacters.findCharacterByIdController,
);
route.post(
  '/Create-character',
  validObjectBody,
  controllerCharacters.createCharacterController,
);
route.put(
  '/Update-Character/:id',
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController,
);
route.delete(
  '/Detete-character/:id',
  validId,
  controllerCharacters.deleteCharacterController,
);

module.exports = route;
