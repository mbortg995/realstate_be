import postService from './post.service.js';

export const postController = {
  index: async (req, res) => {
    try {
      const posts = await postService.index(req.user.building_id);
      return res.json(posts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const post = await postService.create(req.body, req.user._id, req.user.building_id);
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const post = await postService.update(req.params.postId, req.body);
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const post = await postService.delete(req.params.postId);
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}