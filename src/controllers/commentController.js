const { createComment, getComments, toggleLike } = require('../services/commentService');
const asyncHandler = require('express-async-handler');
const logger = require('../utils/logger');

exports.createComment = asyncHandler(async (req, res) => {
  const comment = await createComment(req.body);
  logger.info('Comment created successfully');
  res.status(201).json(comment);
});

exports.getComments = asyncHandler(async (req, res) => {
  // Ekstrak parameter dari query string dan konversi ke tipe data yang sesuai
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const sortBy = req.query.sortBy || '-createdAt'; // Pastikan ini sesuai dengan kebutuhan
  // Ambil filter tanpa parameter pagination dan sorting
  const filters = { ...req.query };
  delete filters.page;
  delete filters.limit;
  delete filters.sortBy;

  console.log('filters', filters);
  
  // Panggil service getComments dengan parameter yang telah disesuaikan
  const comments = await getComments(filters, page, limit, sortBy);
  

  res.sendSuccess(comments, 200, 'Comments retrieved successfully');
});


exports.toggleLike = asyncHandler(async (req, res) => {
  const submitLike = await toggleLike(req.params.id, req.body.like);
  logger.info(`Comment ${req.body.like ? 'liked' : 'unliked'} successfully`);
  res.sendSuccess(submitLike, 200, 'create like / unliked');
});
