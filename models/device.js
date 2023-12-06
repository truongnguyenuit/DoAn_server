const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
  device: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('device', DeviceSchema)
