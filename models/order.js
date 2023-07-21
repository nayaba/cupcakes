const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    }],
    customer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    total: Number,
    ready: Boolean,
    closed: Boolean,
    pickupDate: Date
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Order', orderSchema)
