const express = require('express')
const app = express()

// get the port from env variable
//const PORT = process.env.PORT || 5000
const PORT = process.env.PORT || 10000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
