import paymentRepository from './payment.repository.js';

const validatePaymentFields = (bulkPayment) => {
  const requiredFields = ['amount', 'payment_number', 'starting_date'];

  for (const field of requiredFields) {
    if (!bulkPayment[field]) {
      throw new Error('Missing required field');
    }
  }
};


const paymentService = {
  index: async (userId) => {
    const payments = await paymentRepository.index(userId);
    return payments;
  },
  bulkCreate: async (bulkPayment, userId) => {
    validatePaymentFields(bulkPayment);

    const { amount, payment_number, starting_date } = bulkPayment;

    const startingDateObject = new Date(starting_date);

    const bulkArrayPayment = [];

    // Buen momento para gastar libreria date-fns.

    for (let i = 0; i < payment_number; i++) {
      startingDateObject.setMonth(startingDateObject.getMonth() + 1);
      const bulkObject = {
        amount: amount,
        payment_date: startingDateObject.toISOString(),
        status: "Pending",
        user_id: userId
      };

      bulkArrayPayment.push(bulkObject);
    }

    const payments = await paymentRepository.bulkCreate(bulkArrayPayment);
    return payments;

  },
  bulkUpdate: async (bulkArray) => {
    const { status, ids } = bulkArray;

    const bulkUpdate = await paymentRepository.bulkUpdate(status, ids);
    return bulkUpdate;
  }
}

export default paymentService;