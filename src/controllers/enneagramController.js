const asyncHandler = require('express-async-handler');
const {
  createEnneagrams,
  getAllEnneagrams,
  updateEnneagram,
  deleteEnneagram,
} = require('../services/enneagramService');

exports.createEnneagrams = asyncHandler(async (req, res, next) => {
  const enneagrams = await createEnneagrams(req.body);
  res.sendSuccess(enneagrams, 201, 'Created new enneagrams');
});

exports.getAllEnneagrams = asyncHandler(async (req, res, next) => {
  const enneagrams = await getAllEnneagrams();
  res.sendSuccess(enneagrams, 200, 'Enneagrams fetched successfully');
});

exports.updateEnneagram = asyncHandler(async (req, res, next) => {
  const enneagram = await updateEnneagram(req.params.id, req.body);
  if (!enneagram) {
    return next(new Error('Enneagram not found', 404));
  }
  res.sendSuccess(enneagram, 200, 'Enneagram updated successfully');
});

exports.deleteEnneagram = asyncHandler(async (req, res, next) => {
  const enneagram = await deleteEnneagram(req.params.id);
  if (!enneagram) {
    return next(new Error('Enneagram not found', 404));
  }
  res.sendSuccess({ message: "Enneagram deleted" }, 200, 'Enneagram deleted successfully');
});
