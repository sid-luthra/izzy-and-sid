const mongoose = require('mongoose');

const { Schema } = mongoose;

const GuestSchema = new Schema(
  {
    familyName: { type: String, maxLength: 100 },
    address: {
      streetAddress: { type: String, maxLength: 100 },
      aptSuite: { type: String, maxLength: 100 },
      city: { type: String, maxLength: 100 },
      state: { type: String, maxLength: 100 },
      zip: { type: Number, minLength: 5, maxLength: 5 },
      country: { type: String },
    },
    memberCount: { type: Number },
    members: [{
      title: { type: String, maxLength: 100 },
      firstName: { type: String, maxLength: 100 },
      lastName: { type: String, maxLength: 100 },
      phone: { type: String, maxLength: 15 },
      email: { type: String, maxLength: 100 },
      month: { type: String },
      day: { type: Number },
      year: { type: Number },
    }],
    created: { type: Date },
  },
);

module.exports = mongoose.model('Guest', GuestSchema);
