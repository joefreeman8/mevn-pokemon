import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

import { connectDB } from './db/helpers.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())


const port = process.env.PORT || 4000

function startServer() {
  try {
    connectDB()
    app.listen(port, () => console.log(`🤖🚀 Express is listening on port: ${port}`))
  } catch (err) {
    console.log('❌❌ Starting Server Error: ', err, err.message)
  }
}

startServer()