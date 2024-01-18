import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import serverless from "serverless-http"

import logger from '../../lib/logger.js'
import { connectDB } from '../../db/helpers.js'
import router from '../../config/router.js'

const api = express()

api.use(bodyParser.json())
api.use(cors())
api.use('/', logger)
api.use('/api', router)


// const port = process.env.PORT || 4000

function startServer() {
  try {
    connectDB()
    // api.listen(port, () => console.log(`🤖🚀 Express is listening on port: ${port}`))
  } catch (err) {
    console.log('❌❌ Error: ', err, err.message)
  }
}

startServer()

export const handler = serverless(api)