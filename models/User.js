const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, unique: true, validate: [isEmail, 'invalid email'] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = model('User', userSchema);