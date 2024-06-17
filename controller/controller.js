const User = require('../models/user')

const getUserDetails = async (req, res) => {
  try {
    const userDetails = await User.find({})
    res.render('home', {
      title: 'home page',
      userDetails,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addUserDetails = async (req, res) => {
  res.render('addUser', { title: 'add user' })
}

const postUserDetails = async (req, res) => {
  try {
    const { name, email, phone } = req.body
    const user = new User({ name, email, phone })
    await user.save()
    req.session.message = {
      type: 'success',
      message: 'User added successfully',
    }
    res.redirect('/')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const editUserDetails = async (req, res) => {
  try {
    const userID = req.params.id
    const user = await User.findById(userID)
    if (!user) res.redirect('/')
    res.render('editUser', { title: 'edit user', user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const updateUserDetails = async (req, res) => {
  try {
    const { name, email, phone } = req.body
    const user = new User({ name, email, phone })
    await user.save()
    req.session.message = {
      type: 'success',
      message: 'User updated successfully',
    }
    res.redirect('/')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const deleteUserDetails = async (req, res) => {
  try {
    const userID = req.params.id
    const user = await User.findByIdAndDelete(userID)
    if (user) {
      req.session.message = {
        type: 'success',
        message: 'User deleted successfully',
      }
      res.redirect('/')
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
module.exports = {
  getUserDetails,
  addUserDetails,
  postUserDetails,
  editUserDetails,
  updateUserDetails,
  deleteUserDetails,
}
