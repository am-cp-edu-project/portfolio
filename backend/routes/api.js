const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const adminController = require('../controllers/adminController.js')

router.post('/login', userController.login)
router.post('/add_achieve', userController.addAchieve)
router.post('/add_user', userController.addUser)

router.get('/qwerty', userController.dynamic)

router.get('/zxcvbn', adminController.dynamic)

router.get('/user=*', adminController.allUsers)

module.exports = router
