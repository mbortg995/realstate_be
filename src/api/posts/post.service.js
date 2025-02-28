import postRepository from './post.repository.js';

const validatePostFields = (post) => {
  const requiredFields = ['title', 'content'];

  for (const field of requiredFields) {
    if (!post[field]) {
      throw new Error('Missing required field');
    }
  }
}

const postService = {
  index: async (buildingId) => {
    const posts = await postRepository.index(buildingId);
    return posts;
  },
  create: async ({ post, userId, buildingId, images }) => {
    validatePostFields(post);

    const newPost = {
      ...post,
      user_id: userId,
      building_id: buildingId,
      images: images,
    };

    const createdPost = await postRepository.create(newPost);
    return createdPost;
  },
  update: async (postId, post) => {
    validatePostFields(post);
    const updatedAt = new Date();
    post.updatedAt = updatedAt;
    const updatedPost = await postRepository.update(postId, post);
    return updatedPost;
  },
  delete: async (postId) => {
    const deletedPost = await postRepository.delete(postId);
    return deletedPost;
  }
}

export default postService;