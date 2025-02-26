import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  payment_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
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