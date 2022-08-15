const charactersService = require('../services/characters.service');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();
  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'There are no characters registered!' });
  }
  res.send(allCharacters);
};

const findCharacterByIdController = async (req, res) => {
  const idParams = req.params.id;
  const chooseCharacters = await charactersService.findCharacterByIdServicer(
    idParams,
  );
  res.send(chooseCharacters);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersService.createCharacterService(
    character,
  );
  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParams = req.params.id;
  const characterEditi = req.body;
  const chosenCharacter = await charactersService.updateCharacterService(
    idParams,
    characterEditi,
  );
  res.send(chosenCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharacterService(idParam);
  res.send({ message: 'Character was destroyed!' });
};

module.exports = {
  findAllCharactersController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
