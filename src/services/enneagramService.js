const Enneagram = require('../models/Enneagram');

const createEnneagrams = async (enneagramsData) => {
  return await Enneagram.insertMany(enneagramsData);
};

const getAllEnneagrams = async () => {
  return await Enneagram.find();
};

const updateEnneagram = async (id, updateData) => {
  return await Enneagram.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEnneagram = async (id) => {
  return await Enneagram.findByIdAndDelete(id);
};

module.exports = {
  createEnneagrams,
  getAllEnneagrams,
  updateEnneagram,
  deleteEnneagram,
};
