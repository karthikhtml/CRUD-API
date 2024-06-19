const { User, Credential } = require('../models/user')

const loginPage = (req, res) => {
  res.render('loginPage', { title: 'Login page' })
}
const credentialPage = async (req, res) => {
  try {
    const { email, password } = req.body
    const userCredential = new Credential({ email, password })
    await userCredential.save()
    res.redirect('/home')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const homePage = (req, res) => {
  res.render('home', { title: 'home page' })
}
const getUserDetails = async (req, res) => {
  try {
    const userDetails = await User.find({})
    res.render('userDetails', {
      title: 'user page',
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
    res.redirect('/users')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const editUserDetails = async (req, res) => {
  try {
    const userID = req.params.id
    const user = await User.findById(userID)
    if (!user) res.redirect('/users')
    res.render('editUser', { title: 'edit user', user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const updateUserDetails = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    })

    req.session.message = {
      type: 'success',
      message: 'User updated successfully',
    }
    res.redirect('/users')
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
      res.redirect('/users')
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
  homePage,
  loginPage,
  credentialPage,
}
