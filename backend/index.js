const connecttomongo=require('./db');
connecttomongo();
var cors = require('cors')



const express = require('express')
const app = express()
app.use(cors())
const port = 5000
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`Notebook listening on port http://localhost:${port}`)
})