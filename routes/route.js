const express = require('express')
const {
  getUserDetails,
  addUserDetails,
  postUserDetails,
  editUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require('../controller/controller.js')

const router = express.Router()

router.get('/', getUserDetails)
router.get('/addUser', addUserDetails)
router.post('/addUser', postUserDetails)
router.get('/edit/:id', editUserDetails)
router.post('/updateUser/:id', updateUserDetails)
router.get('/delete/:id', deleteUserDetails)

module.exports = router
