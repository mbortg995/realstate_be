import postModel from './post.model.js';

const postRepository = {
  index: async (buildingId) => {
    const filter = { building_id: buildingId }
    const posts = await postModel.find(filter).lean();
    return posts;
  },
  create: async (post) => {
    const newPost = await postModel.create(post);
    return newPost;
  },
  update: async (postId, post) => {
    const filter = { _id: postId }
    const update = { $set: post }
    const updatedPost = await postModel.findOneAndUpdate(filter, update, { new: true });
    return updatedPost;
  },
  delete: async (postId) => {
    const filter = { _id: postId }
    const deletedPost = await postModel.findOneAndDelete(filter);
    return deletedPost;
  }
}

export default postRepository;