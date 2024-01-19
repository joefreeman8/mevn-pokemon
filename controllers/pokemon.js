import Pokemon from "../models/pokemon.js";
import User from "../models/user.js";

async function pokemonCreate(req, res) {
  try {
    const userEmail = req.headers['user-email']
    const findUser = await User.findOne({ "userEmail": userEmail })
    const createPokemon = await Pokemon.create({ ...req.body, addedBy: findUser._id })
    console.log(createPokemon)
    return res.status(201).json(createPokemon)
  } catch (err) {
    console.error('Error creating Pokemon: ', err, err.message)
    return res.sendStatus(500)
  }
}

async function pokemonIndex(req, res) {
  try {
    const allPokemon = await Pokemon.find({})
    const sortPokemon = allPokemon.sort((a, b) => a.number - b.number)
    return res.status(200).json(sortPokemon)
  } catch (err) {
    console.error('Error finding Pokemon: ', err, err.message)
    return res.sendStatus(500)
  }
}

async function pokemonShow(req, res) {
  try {
    const id = req.params.id
    const singlePokemon = await Pokemon.findById(id).populate('addedBy')
    return res.status(200).json(singlePokemon)
  } catch (err) {
    console.error('Error finding single Pokemon: ', err, err.message)
    return res.sendStatus(500)
  }
}

async function pokemonDelete(req, res) {
  try {
    const id = req.params.id
    const userEmail = req.headers["user-email"]
    const findUser = await User.findOne({ "userEmail": userEmail })
    const findPokemon = await Pokemon.findById(id)

    if (findUser._id.equals(findPokemon.addedBy)) {
      console.log('sucessfully deleting')
      await Pokemon.findByIdAndDelete(id)
      return res.sendStatus(204)
    } else {
      console.log('Invalid user or Pokemon not found');
      return res.sendStatus(401)
    }
  } catch (err) {
    console.error('Error deleting Pokemon: ', err.message)
    return res.sendStatus(500)
  }
}

async function pokemonUpdate(req, res) {
  try {
    const id = req.params.id
    const userEmail = req.headers['user-email']
    const findUser = await User.findOne({ "userEmail": userEmail })
    const findPokemon = await Pokemon.findById(id)

    if (findUser._id.equals(findPokemon.addedBy)) {
      const pokemonToUpdate = await Pokemon.findByIdAndUpdate(id, { ...req.body }, { new: true })
      await pokemonToUpdate.save()
      return res.status(202).json(pokemonToUpdate)
    } else {
      console.log('Invalid user or Pokemon not found');
      return res.sendStatus(401)
    }
  } catch (err) {
    console.error('Error updating Pokemon: ', err)
    return res.sendStatus(500)
  }
}

export default {
  create: pokemonCreate,
  index: pokemonIndex,
  show: pokemonShow,
  delete: pokemonDelete,
  update: pokemonUpdate
}