import express from 'express'
import pokemon from '../controllers/pokemon.js'

const router = express.Router()

router.route('/pokemon/add')
  .post(pokemon.create)

router.route('/pokemon')
  .get(pokemon.index)

router.route('/pokemon/:id')
  .get(pokemon.show)
  .delete(pokemon.delete)

export default router