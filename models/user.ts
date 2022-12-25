import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true },
  wallet: { type: String },
  warranties: [String],
});

export default mongoose.models.User || mongoose.model('User', userSchema);
