import paymentRepository from './payment.repository.js';

const validatePaymentFields = (bulkPayment) => {
  const requiredFields = ['amount', 'payment_number', 'starting_month', 'starting_year'];

  for (const field of requiredFields) {
    if (!bulkPayment[field]) {
      throw new Error('Missing required field');
    }
  }
};

const validateMonthField = () => {
  // Validar que el mes esté entre 1 y 12.
}

const validateYearField = () => {
  // Validar que el año esté en rango.
}


const paymentService = {
  index: async (userId) => {
    const payments = await paymentRepository.index(userId);
    return payments;
  }
}

export default paymentService;