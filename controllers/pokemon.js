import Pokemon from "../models/pokemon.js";

async function pokemonCreate(req, res) {
  try {
    const createPokemon = await Pokemon.create({ ...req.body })
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
    return res.status(200).json(allPokemon)
  } catch (err) {
    console.error('Error finding Pokemon: ', err, err.message)
    return res.sendStatus(500)
  }
}

async function pokemonShow(req, res) {
  try {
    const id = req.params.id
    const singlePokemon = await Pokemon.findById(id)
    return res.status(200).json(singlePokemon)
  } catch (err) {
    console.error('Error finding single Pokemon: ', err, err.message)
    return res.sendStatus(500)
  }
}


export default {
  create: pokemonCreate,
  index: pokemonIndex,
  show: pokemonShow
}