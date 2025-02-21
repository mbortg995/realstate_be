import userModel from './user.model.js';

const userRepository = {
  create: async (data) => {
    const user = await userModel.create(data);
    return user;
  },

  getByEmail: async (email) => {
    const user = await userModel.findOne({ email });
    return user;
  },
};

export default userRepository;
