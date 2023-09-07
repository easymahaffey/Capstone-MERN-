const mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema({
  firstName: { type: String, require: true, maxLength: 100 },
  lastName: { type: String, require: true, maxLength: 100 },
  date_member_joined: { type: Date, default: Date.now() },
  email: { type: String, require: true, unique: true, trim: true },
  password: { type: String, require: true, trim: true },
  isAuthorized: { type: Boolean, default: false },
  address1: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, require: true, trim: true },
  State: { type: String, require: true, trim: true },
  zipCode: { type: String, trim: true },
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
