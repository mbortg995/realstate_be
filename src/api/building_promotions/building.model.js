import { model, Schema } from 'mongoose';

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  adress: {
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

const buildingModel = model('Building', userSchema);

export default buildingModel;