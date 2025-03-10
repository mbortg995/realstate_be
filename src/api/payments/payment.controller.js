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
    try {
      const payments = await paymentService.bulkCreate(req.body, req.user._id);
      return res.json(payments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  bulkUpdate: async (req, res) => {
    try {
      const payments = await paymentService.bulkUpdate(req.body);
      return res.json(payments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  bulkDelete: async (req, res) => {
    try {
      const payments = await paymentService.bulkDelete(req.body);
      return res.json(payments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}