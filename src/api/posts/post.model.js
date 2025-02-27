import e from 'express';
import { model, Schema } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
}, {
  timestamps: true,
});

const postModel = model('Post', postSchema);

export default postModel;