import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    categories: [String],
    deadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('posts', postSchema);
