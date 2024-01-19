import { connectDB, truncateDb, disconnectDb } from "./helpers.js"
import Pokemon from '../models/pokemon.js'
import pokemonData from "./data/pokemonData.js"
import User from '../models/user.js'

import 'dotenv/config'

async function seed() {
  try {
    await connectDB()
    console.log('🤖🌱 Database Connected')

    await truncateDb()
    const now = new Date()

    const myUser = await User.create({
      userEmail: `${process.env.USER_EMAIL}`,
      uniqueSub: `${process.env.UNIQUE_SUB}`,
      lastLogin: now
    })

    console.log('🤖🌱 My User Created')

    const pokemonDataWithMyUser = pokemonData.map(pokemon => {
      pokemon.addedBy = myUser
      return pokemon
    })

    const createdPokemon = await Pokemon.create(pokemonDataWithMyUser)
    console.log(`🤖🌱 ${createdPokemon.length} Pokemon Created`)

  } catch (err) {
    console.log('🤖🌱❌ Something Went Wrong Seeding the DB')
    console.log(err)
  }

  await disconnectDb()
  console.log('🤖🌱 Database Disconnected, Goodbye!')

}

seed()