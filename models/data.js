const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
  gas: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: String,
    require: true
  },
}, { timestamps: true })

module.exports = mongoose.model('data', DateSchema)
