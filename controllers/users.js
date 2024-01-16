import User from "../models/user.js";

async function createUser(req, res) {
  const now = new Date()
  try {
    if (await User.countDocuments({ "userEmail": req.body.userEmail }) === 0) {
      const newUser = new User({
        userEmail: req.body.userEmail,
        lastLogin: now
      })
      await newUser.save()
      return res.status(200).json(newUser)
    } else {
      const user = await User.findOneAndUpdate(
        { "userEmail": req.body.userEmail },
        { lastLogin: now }
      )
      res.status(200).json(user)
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err.message)
  }
}

export default {
  create: createUser
}