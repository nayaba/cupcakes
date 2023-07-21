const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    phone: String,
    optIn: Boolean,
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
