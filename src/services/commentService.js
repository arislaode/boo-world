const Comment = require('../models/commentModel');
const MBTI = require('../models/MBTI');
const Enneagram = require('../models/Enneagram');
const Zodiac = require('../models/Zodiac');
const mongoose = require('mongoose');

const createComment = async ({ userId, text, personalityTypes }) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const mbti = personalityTypes.mbti ? await MBTI.findById(personalityTypes.mbti).session(session) : null;
    const enneagram = personalityTypes.enneagram ? await Enneagram.findById(personalityTypes.enneagram).session(session) : null;
    const zodiac = personalityTypes.zodiac ? await Zodiac.findById(personalityTypes.zodiac).session(session) : null;

    if (personalityTypes.mbti && !mbti || personalityTypes.enneagram && !enneagram || personalityTypes.zodiac && !zodiac) {
      throw new Error('Invalid personality type ID.');
    }

    const comment = await Comment.create([{
      userId, text, personalityTypes: { mbti: mbti?._id, enneagram: enneagram?._id, zodiac: zodiac?._id }, createdAt: new Date()
    }], { session });
    
    await session.commitTransaction();
    session.endSession();

    return comment;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getComments = async (filters, page = 1, limit = 10, sortBy = '-createdAt') => {
  const queryFilters = {};
  if (filters.mbti) queryFilters['personalityTypes.mbti'] = new mongoose.Types.ObjectId(filters.mbti);
  if (filters.enneagram) queryFilters['personalityTypes.enneagram'] = new mongoose.Types.ObjectId(filters.enneagram);
  if (filters.zodiac) queryFilters['personalityTypes.zodiac'] = new mongoose.Types.ObjectId(filters.zodiac);

  const aggregateQuery = [
    { $match: queryFilters },
    { $unwind: { path: '$mbtiDetails', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$enneagramDetails', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$zodiacDetails', preserveNullAndEmptyArrays: true } },
    { $sort: { createdAt: sortBy === '-createdAt' ? -1 : 1 } },
    { $skip: (page - 1) * limit },
    { $limit: limit }
  ];

  const comments = await Comment.aggregate(aggregateQuery).exec();

  return comments;
};



const toggleLike = async (commentId, like) => {
  const comment = await Comment.findById(commentId);
  if (!comment) throw new Error('Comment not found.');

  comment.likes += like ? 1 : (comment.likes > 0 ? -1 : 0);
  await comment.save();

  return comment;
};

const filterCommentsByType = async (filterType) => {
  let filter = {};
  if (filterType !== 'all') {
    // Correctly reference the nested paths for mbti, enneagram, and zodiac
    filter[`personalityTypes.${filterType}`] = { $exists: true, $ne: null };
    return await Comment.find(filter).populate(`personalityTypes.${filterType}`);
  } else {
    // If filterType is 'all', no need to filter by personality type
    return await Comment.find({});
  }
};


module.exports = { createComment, getComments, toggleLike, filterCommentsByType };
