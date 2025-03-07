import { model, Schema } from 'mongoose';

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  housing_number: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
});

const buildingModel = model('Building', buildingSchema);

export default buildingModel;