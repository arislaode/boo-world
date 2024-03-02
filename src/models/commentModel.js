const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    text: { type: String, required: true },
    personalityTypes: {
      mbti: { type: mongoose.Schema.Types.ObjectId, ref: 'MBTI', default: null },
      enneagram: { type: mongoose.Schema.Types.ObjectId, ref: 'Enneagram', default: null },
      zodiac: { type: mongoose.Schema.Types.ObjectId, ref: 'Zodiac', default: null }
    },
    createdAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
