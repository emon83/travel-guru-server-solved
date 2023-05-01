const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const corsConfig = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
  app.use(cors(corsConfig))
  

const allServices = require("./data/destination.json")
const bookingData = require("./data/booking.json")

app.get('/', (req, res) => {
    res.json({message: "hello server is running!"})
})

app.get('/allData', (req, res) => {
    res.send(allServices);
})
app.get('/booking', (req, res) => {
    res.send(bookingData);
})

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const item = allServices[0]?.destinations?.find(pd => pd.id == id);
    res.send({item});
  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})