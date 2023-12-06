const express = require('express')
const router = express.Router()
const Data = require('../models/data')
const { sendNotification } = require('../helper/sendNotification')

router.post('/', async (req, res) => {

  if (!req.body.gas || !req.body.temperature || !req.body.humidity) {
    return res.status(403).json({ success: true, error: 'Missing data' })
  }

  

  const newData = new Data({
    gas: req.body.gas,
    temperature: req.body.temperature,
    humidity: req.body.humidity
  })
  await newData.save();
  console.log("save data ok")
  res.status(200).json({ success: true, message: 'writing data successful' })
})

router.post('/', async (req, res) => {

  if (!req.body.gas || !req.body.temperature || !req.body.humidity) {
    return res.status(403).json({ success: true, error: 'Missing data' })
  }

  if (req.body.gas > 10) {
    sendNotification(
      'https://media.istockphoto.com/id/1323529010/vector/fire-vector-isolated.jpg?s=612x612&w=0&k=20&c=ta6bKkXZDuqy2H3tRhR79sSl_-fdGhKyoenbbjEr3l0=',
      'Gas Alert',
      'Gas is overvalue'
    ).then((msg) => {
      console.log("hehe",msg);
    }).catch((err) => {
      console.error("hehe",err);
    });
  }

  if (req.body.temperature > 37) {
    sendNotification(
      'https://cdn2.iconfinder.com/data/icons/weather-120/130/_High_Temperature-512.png',
      'Temperature Alert',
      'Temperature is overvalue'
    ).then((msg) => {
      console.log(msg);
    }).catch((err) => {
      console.error(err);
    });
  }

  if (req.body.humidity > 300) {
    sendNotification(
      'https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2013/02/thumb_720_450_881.jpg',
      'Humiduty Alert',
      'Humidity is overvalue'
    ).then((msg) => {
      console.log(msg);
    }).catch((err) => {
      console.error(err);
    });
  }

  const newData = new Data({
    gas: req.body.gas,
    temperature: req.body.temperature,
    humidity: req.body.humidity
  })
  await newData.save();
  console.log("save data ok")
  res.status(200).json({ success: true, message: 'writing data successful' })
})

router.get('/', async (req, res) => {
  console.log("hehe")
  try {
    const data = await Data.findOne().sort({ createdAt: -1 }).exec();

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Đã xảy ra lỗi khi lấy dữ liệu sớm nhất' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const data = await Data.find().sort({ createdAt: -1 }).limit(20).exec();

    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Đã xảy ra lỗi khi lấy 20 dữ liệu sớm nhất' });
  }
});

module.exports = router