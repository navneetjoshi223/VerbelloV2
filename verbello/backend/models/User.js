const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  language: String,
  unitsCompleted: Number,
  lessonsCompleted:Number
}, {
    timestamps: true,
  });

const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  courses: [courseSchema], // Embedding the Course schema directly
  isActive: {
    type: Boolean,
    default: true, // Set the default value to true
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
