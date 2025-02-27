import paymentModel from './payment.model.js';


const paymentRepository = {
  index: async (userId) => {
    const filter = { user_id: userId }
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
  },
  bulkDelete: async (ids) => {
    const filter = { _id: { $in: ids } }
    const bulkDelete = await payment
      .deleteMany(filter);
    return bulkDelete;
  },
}

export default paymentRepository;