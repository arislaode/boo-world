const asyncHandler = require('express-async-handler');
const {
  createMBTIs,
  getAllMBTIs,
  updateMBTI,
  deleteMBTI,
} = require('../services/mbtiService');

exports.createMBTIs = asyncHandler(async (req, res) => {
  const mbtis = await createMBTIs(req.body);
  res.sendSuccess(mbtis, 201, 'Created new MBTIs');
});

exports.getAllMBTIs = asyncHandler(async (req, res) => {
  const mbtis = await getAllMBTIs();
  res.sendSuccess(mbtis, 200, 'MBTIs fetched successfully');
});

exports.updateMBTI = asyncHandler(async (req, res) => {
  const mbti = await updateMBTI(req.params.id, req.body);
  res.sendSuccess(mbti, 200, 'MBTI updated successfully');
});

exports.deleteMBTI = asyncHandler(async (req, res) => {
  await deleteMBTI(req.params.id);
  res.sendSuccess({ message: "MBTI deleted" }, 200, 'MBTI deleted successfully');
});
