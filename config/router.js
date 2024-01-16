import express from 'express'
import pokemon from '../controllers/pokemon.js'
import users from '../controllers/users.js'

const router = express.Router()

router.route('/pokemon/add')
  .post(pokemon.create)

router.route('/pokemon')
  .get(pokemon.index)

router.route('/pokemon/:id')
  .get(pokemon.show)
  .delete(pokemon.delete)
  .put(pokemon.update)

router.route('/users/login')
  .post(users.create)

export default router