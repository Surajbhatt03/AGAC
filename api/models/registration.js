import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  options: {
    conferences: { type: Boolean, default: false },
    webinars: { type: Boolean, default: false },
    workshops: { type: Boolean, default: false },
    trainingSessions: { type: Boolean, default: false },
    rssFeed: { type: Boolean, default: false },
  },
},{ timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);
export default Registration;
