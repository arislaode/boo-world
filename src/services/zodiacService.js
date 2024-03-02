const Zodiac = require('../models/Zodiac');

const getAllZodiacs = async () => {
  return await Zodiac.find();
};

const createZodiac = async (zodiacsData) => {
    return await Zodiac.insertMany(zodiacsData);
};

const updateZodiac = async (id, updateData) => {
  return await Zodiac.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteZodiac = async (id) => {
  await Zodiac.findByIdAndDelete(id);
};

module.exports = {
  getAllZodiacs,
  createZodiac,
  updateZodiac,
  deleteZodiac,
};
