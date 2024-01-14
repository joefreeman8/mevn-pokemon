import mongoose from "mongoose"

const pokemonSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  type: [{ type: String, required: true }],
  pokedexEntry: { type: String, required: true, maxlength: 500 },
  habitat: { type: String, required: true },
  sprite: { type: String, required: true },
  image: { type: String, required: true },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export default Pokemon