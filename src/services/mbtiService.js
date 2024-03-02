const MBTI = require('../models/MBTI');

const createMBTIs = async (mbtiData) => {
  return await MBTI.insertMany(mbtiData);
};

const getAllMBTIs = async () => {
  return await MBTI.find();
};

const updateMBTI = async (id, updateData) => {
  const mbti = await MBTI.findByIdAndUpdate(id, updateData, { new: true });
  if (!mbti) {
    throw new Error('MBTI not found');
  }
  return mbti;
};

const deleteMBTI = async (id) => {
  const mbti = await MBTI.findByIdAndDelete(id);
  if (!mbti) {
    throw new Error('MBTI not found');
  }
  return { message: "MBTI deleted" };
};

module.exports = {
  createMBTIs,
  getAllMBTIs,
  updateMBTI,
  deleteMBTI,
};
