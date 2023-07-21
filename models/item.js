const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    flavor: {
      type: String,
      required: true
    },
    qtyLabel: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Cupcake', 'Round Cake', 'Sheet Cake', 'Other']
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    allergenFree: {
      type: String,
      required: true,
      default: false
    },
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Item', itemSchema)
