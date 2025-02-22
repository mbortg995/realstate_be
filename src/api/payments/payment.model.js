import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  payment_number: {
    type: Number,
    required: true,
  },
  starting_month: {
    type: Number,
    required: true,
  },
  starting_year: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
}, {
  timestamps: true,
});

const paymentModel = model('Payment', paymentSchema);

export default paymentModel;