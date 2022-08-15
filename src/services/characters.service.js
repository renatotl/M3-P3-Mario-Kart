const MarioKart = require('../models/MarioKart');

const findAllCharactersService = async () => {
  const characters = await MarioKart.find();
  return characters;
};

const findCharacterByIdServicer = async (idParams) => {
  const character = await MarioKart.findById(idParams);
  return character;
};

const createCharacterService = async (newCharacter) => {
  const characterCreated = await MarioKart.create(newCharacter);
  return characterCreated;
};

const updateCharacterService = async (id, characterEdited) => {
  const characterUpdate = await MarioKart.findByIdAndUpdate(
    id,
    characterEdited,
  );
  return characterUpdate;
};

const deleteCharacterService = async (id) => {
  return await MarioKart.findByIdAndDelete(id);
};

module.exports = {
  findAllCharactersService,
  findCharacterByIdServicer,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
