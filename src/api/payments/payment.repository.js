import paymentModel from './payment.model.js';


const paymentRepository = {
  index: async (userId) => {
    const filter = { _id: userId }
    const payments = await paymentModel.find(filter).lean();
    return payments;
  },
  bulkCreate: async (bulkArrayPayment) => {
    const payments = await paymentModel.insertMany(bulkArrayPayment);
    return payments;
  }
}

export default paymentRepository;