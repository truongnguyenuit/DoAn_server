require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Router = require('./routes/controller')
const cors = require('cors')
const { sendNotification } = require('./helper/sendNotification')

sendNotification(
  'https://media.istockphoto.com/id/1323529010/vector/fire-vector-isolated.jpg?s=612x612&w=0&k=20&c=ta6bKkXZDuqy2H3tRhR79sSl_-fdGhKyoenbbjEr3l0=',
  'Gas Alert',
  'Gas is overvalue'
).then((msg) => {
  console.log("hehe",msg);
}).catch((err) => {
  console.error("hehe",err);
});

const app = express()

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://vrttankzz:0918972561@chatapp.hsa4hpv.mongodb.net/`,
    )
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
connectDB()

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.json())
app.use('/api/', Router)

app.listen(5001, () => console.log(`server started on port 5001`))