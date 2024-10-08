import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true
  },
  avatarUrl: String,
}, {
  timestamps: true
});

export default model('User', UserSchema)
