const asyncHandler = require('express-async-handler');
const {
  getAllZodiacs,
  createZodiac,
  updateZodiac,
  deleteZodiac,
} = require('../services/zodiacService');

exports.getAllZodiacs = asyncHandler(async (req, res) => {
  const zodiacs = await getAllZodiacs();
  res.sendSuccess(zodiacs, 200, 'Fetched all zodiacs');
});

exports.createZodiac = asyncHandler(async (req, res) => {
  const createdZodiacs = await createZodiac(req.body);
  res.sendSuccess(createdZodiacs, 201, 'Created new zodiac');
});

exports.updateZodiac = asyncHandler(async (req, res) => {
  const updatedZodiac = await updateZodiac(req.params.id, { name: req.body.name });
  res.sendSuccess(updatedZodiac, 200, 'Updated zodiac');
});

exports.deleteZodiac = asyncHandler(async (req, res) => {
  await deleteZodiac(req.params.id);
  res.sendSuccess({ message: "Deleted Zodiac" }, 200, 'Deleted zodiac');
});
