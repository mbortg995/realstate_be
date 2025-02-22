import paymentModel from './payment.model.js';


const paymentRepository = {
  index: async (userId) => {
    const filter = { _id: userId }
    const payment = await paymentModel.find(filter).lean();
    return payment;
  }
}

export default paymentRepository;