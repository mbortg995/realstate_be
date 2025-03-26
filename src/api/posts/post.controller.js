import postService from './post.service.js';
import keys from '../../../constants.configs.js';



export const postController = {
  index: async (req, res) => {
    try {
      const posts = await postService.index(req.user.building_id);
      const mappedPosts = posts.map((post) => {
        post.images = post.images.map((image) => `${keys.SERVER_URL}${image}`);
        return post;
      })
      return res.json(mappedPosts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      console.log(req.files);
      const post = await postService.create({
        post: req.body,
        userId: req.user._id,
        buildingId: req.user.building_id,
        images: !req.files ? [] : req.files.map((file) => {
          return file.path;
        })
      });
      return res.json(post);
    } catch (error) {
      console.log(error);
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