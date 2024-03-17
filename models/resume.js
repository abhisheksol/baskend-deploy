const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
  resume: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("resumes", userSchema);