import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import logger from './lib/logger.js'
import { connectDB } from './db/helpers.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/', logger)


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