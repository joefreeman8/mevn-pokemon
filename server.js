import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(bodyParser.json())
app.use(cors())

// mongoose.connect(process.env.DATABASE_URL)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`🤖🚀 Express is listening on port: ${port}`))