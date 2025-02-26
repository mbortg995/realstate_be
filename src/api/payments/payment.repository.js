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
  },
  bulkUpdate: async (status, ids) => {
    const filter = { _id: { $in: ids } }
    const update = { $set: { status: status } }
    const bulkUpdate = await paymentModel.updateMany(filter, update);
    return bulkUpdate;
  }
}

export default paymentRepository;