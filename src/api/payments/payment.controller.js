import paymentService from './payment.service.js';

export const paymentController = {
  index: async (req, res) => {
    try {
      const payments = await paymentService.index(req.user._id);
      return res.json(payments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  bulkCreate: async (req, res) => {

  },
  update: async (req, res) => {

  },
  delete: async (req, res) => {

  },
}