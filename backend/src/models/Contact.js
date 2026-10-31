const mongoose = require("mongoose")

// Contact requests are separate from login users; visitors need no account.
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  phone: { type: String, required: true, trim: true, maxlength: 25 }
}, { timestamps: true })

module.exports = mongoose.model("Contact", contactSchema)
